const express = require('express');
const {
    homeView,
    formView,
    formSubmission,
    editAnimal,
    getAllAnimals,
    updateAnimal,
    deleteAnimal
} = require('../controllers/animalController');

const router = require('express').Router();

router.get('/', homeView);

// FORM PAGE
router.get('/entry-form', formView);
router.post('/entry-form', formSubmission);

// Animal List
router.get('/all-animals', getAllAnimals);

// EDIT ANIMALS
router.get('/edit-animal/:id', editAnimal);
router.post('/edit-animal/:id', updateAnimal);
router.post('/delete-animal/:id', deleteAnimal);

module.exports = router;