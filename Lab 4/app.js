// REQUESTS
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');


// PRE-APP CONFIG
dotenv.config({ path: './process.env' });

const DB_CONN = process.env.MONGO_CONN_STR.replace(
    '<PASS>',
    process.env.MONGO_PASS
);

mongoose
    .connect(DB_CONN, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Database Connnection Successful!'))
    .catch((err) => console.log(`DB Connection ERROR: ${err}`));



// CREATE THE APP
const app = express();

// APP CONFIG
app.engine(
    '.hbs',
    exphbs.engine({
        defaultLayout: 'main',
        partialsDir: './views/partials',
        extname: '.hbs',
    })
);
app.set('view engine', '.hbs');
app.set('views', './views');

// for forms
app.use(express.json()); // Used to parse JSOn bodies
app.use(express.urlencoded({ extended: true })); // Parse url-encoded bodies

// ROUTES
app.use('/', require('./routes/animal'));

// SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
