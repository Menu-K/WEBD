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
    const { zoo, scientificName, commonName, givenName, gender, dateOfBirth, age, isTransportable } = req.body;

    const newAnimal = new Animal({
        zoo,
        scientificName,
        commonName,
        givenName,
        gender,
        dateOfBirth: new Date(dateOfBirth),
        age,
        isTransportable: isTransportable === 'AVAILABLE',
    });

    newAnimal.save()
        .then(() => {
            console.log('Animal added successfully!');
            res.redirect('/all-animals');
        })
        .catch((err) => console.log(err));
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
                dateOfBirth: animal.dateOfBirth
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