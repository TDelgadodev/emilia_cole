const express = require('express');
const {home,about,contact,music } = require('../controllers/mainController');
const router = express.Router();

/* GET home page. */
router
    .get('/',home)
    .get('/about',about)
    .get('/contact',contact)
    .get('/music',music)

module.exports = router;