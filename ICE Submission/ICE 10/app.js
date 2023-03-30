// REQUESTS
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

// PRE-APP CONFIG
dotenv.config({ path: './process.env' });

// CREATE THE APP
const app = express();

// APP CONFIG
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', partialsDir: './views/partials', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// ROUTES
app.use('/', require('./routes/user'));

// SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});