const express = require('express');
const router = express.Router();
const FiltroController = require('../controllers/FiltroController')

router.get('/animais/buscar', FiltroController.filtrarAnimais)

module.exports = router;