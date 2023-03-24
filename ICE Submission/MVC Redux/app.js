// REQUESTS
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');

// PRE-APP CONFIG
dotenv.config({path: './process.env'});

// CREATE THE APP
const app = express();


// APP CONFIG
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', partialsDir: './views/partials', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// MIDDLEWARE

// ROUTES

// SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});