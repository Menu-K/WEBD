const express = require('express');

const { homeView, planetView, peopleView } = require('../controllers/userController');

const router = express.Router();

router.get('/', homeView);
router.get('/planets', planetView);
router.get('/people', peopleView);


module.exports = router;