const express = require('express');
const {
    homeView,
    formView,
    formSubmission,
    editAnimal,
    getAllAnimals,
    updateAnimal,
    deleteAnimal
} = require('../controllers/animalController'); // Importing the controller functions

const router = require('express').Router(); // Creating an Express router

// Setting up routes and associating them with controller functions
router.get('/', homeView);

// FORM PAGE
router.get('/entry-form', formView);
router.post('/entry-form', formSubmission); 

// Animal List
router.get('/all-animals', getAllAnimals); 

// EDIT/UPDATE/DELETE ANIMALS
router.get('/edit-animal/:id', editAnimal); 
router.post('/edit-animal/:id', updateAnimal);
router.post('/delete-animal/:id', deleteAnimal);

module.exports = router; // Exporting the router for use in other modules
