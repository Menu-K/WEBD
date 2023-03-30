const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config({ path: './process.env' });

const app = express();

app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', partialsDir: './views/partials', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


const PORT = process.env.PORT;
app.listen(PORT, () {
    console.log(`App listening on port ${PORT}`);
});