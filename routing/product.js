const fileSystem = require("fs");
const { STATUS_CODE } = require("../constants/statusCode");

const path = require("path");

const express = require("express");

const renderNewProductPage = require("../views/renderNewProductPage");

const router = express.Router();

router.get("/add", (_request, response) => {
  response.sendFile(path.join(__dirname, "../views", "add-product.html"));
});

router.post("/add", (request, response) => {
  const { name, description } = request.body;

  fileSystem.writeFile(
    "product.txt",
    `Name: ${name}, Description: ${description}`,
    (error) => {
      if (error) {
        throw error;
      }

      response.status(STATUS_CODE.FOUND).redirect("/product/new");
    }
  );
});

router.get("/new", (_request, response) => {
  fileSystem.readFile("product.txt", "utf-8", (_error, data) => {
    response.send(renderNewProductPage(data));
  });
});

module.exports = router;
