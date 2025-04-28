const express = require('express');
const path = require('path');

// Zmieniamy ścieżkę na względną
const { getFileFromAbsolutePath } = require('./utils/path.js');

const app = express();

// Ustawienia EJS
app.set('view engine', 'ejs');
app.set('views', getFileFromAbsolutePath('views'));

// Publiczny folder
app.use(express.static(getFileFromAbsolutePath('public')));

// Middleware
app.use(express.urlencoded({ extended: false }));

// Routing
const productsRoutes = require('./routing/product.js');
app.use('/products', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
