const express = require('express');

const {
    homeView,
    formView,
    formSubmission,
} = require('../controllers/animalController');

const router = express.Router();

router.get('/', homeView);

// FORM PAGE
router.get('/form', formView);
router.post('/form', formSubmission);

// Animal List
router.get('/all-animals', getAllAnimals);




module.exports = router;