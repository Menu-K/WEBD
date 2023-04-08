const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../model/Animal');
const Animal = mongoose.model('Animal');

// Animal Home View
const homeView = (req, res) => {
    const pageTitle = 'Home';
    res.render('index', {
        pageTitle: pageTitle,
    });
};

module.exports = {

};