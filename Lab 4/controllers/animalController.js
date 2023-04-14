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

// Animal Form View
const formView = (req, res) => {
    const pageTitle = 'Animal Form';
    res.render('animals/entry-form', {
        pageTitle: pageTitle,
    });
};

// Get All Animals
const getAllAnimals = (req, res) => {
    Animal.find().lean().then((animals) => {
        res.render('animals/all-animals', {
            pageTitle: 'Animal List',
            animals: animals
        });
    });
};


// Form Submission
const formSubmission = (req, res) => {
    // Implement logic to handle form submission and add animal record to the database
    // based on req.body data
};

// Edit Animal
const editAnimal = (req, res) => {
    const id = req.params.id;
    Animal.findOne({ _id: id })
        .lean()
        .then((animal) => {
            res.render('animals/edit-animal', {
                animal: animal,
                id: id,
                pageTitle: 'Edit Animal',
            });
        })
};

// Update Animal Record
const updateAnimal = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: id };
    const update = {
        zoo: req.body.zoo,
        scientificName: req.body.scientificName,
        commonName: req.body.commonName,
        givenName: req.body.givenName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        isTransportable: req.body.isTransportable === 'AVAILABLE',
    };
    let doc = await Animal.findOneAndUpdate(filter, update, { new: true })
    res.redirect('/all-animals');
};

// Delete Animal Record
const deleteAnimal = async (req, res) => {
    console.log("Deleting:");
    const id = req.params.id;
    const filter = { _id: id };
    let deletedCount = await Animal.deleteOne(filter)
    res.redirect('/all-animals');
};
module.exports = {
    homeView,
    formView,
    getAllAnimals,
    formSubmission,
    editAnimal,
    updateAnimal,
    deleteAnimal
};