const express = require('express');
const path = require('path');
const { getFileFromAbsolutePath } = require('./utils/path');

const app = express();

// Ustawienia EJS
app.set('view engine', 'ejs');
app.set('views', getFileFromAbsolutePath('views'));

// Publiczny folder
app.use(express.static(getFileFromAbsolutePath('public')));

// Middleware
app.use(express.urlencoded({ extended: false }));

// Routing/**/
const productsRoutes = require('./routing/products');
app.use('/products', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
/**/