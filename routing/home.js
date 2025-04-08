const path = require("path");

const express = require("express");

const router = express.Router();

// 🔄 Refactoro the Changer
// Funkcja "response.sendFile" nie jest odpowiednia do zwracania widoków generowanych przez
// większość silników szablonów. Należy ją zastąpić, inną odpowiednią metodą.
router.get("/", (_request, response) => {
  response.sendFile(path.join(__dirname, "../views", "home.html"));
});

module.exports = router;
