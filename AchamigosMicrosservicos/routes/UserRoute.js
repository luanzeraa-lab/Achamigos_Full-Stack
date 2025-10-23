
const express = require('express');
const router = express.Router();


const UserController = require('../controllers/UserController');


router.post('/users/register', UserController.cadastrar);


router.post('/users/login', UserController.login);


module.exports = router;