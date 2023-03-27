const express = require('express');
const exphbs = require('express-handlebars');
const PORT = 3000;

// Create an express app
const app = express();

// set up Handlebars engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');



// express app.user()
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = 'Menu';
    next();
});

// make the index route for a get method
app.get('/', (req, res) => {
    res.render('home');
});



// add about route
app.get('/about', (req, res) => {
    // send to the correct .handlebars view
    res.render('about');
})

// add contact route
app.get('/contact', (req, res) => {
    // send to the correct .handlebars view
    res.render('contact');
})






// run server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);

});