const express = require('express');
const router = express.Router();
const FiltroController = require('../controllers/FiltroController')

router.get('/animais/cidade/:cidade', FiltroController.filtrarAnimais);
router.get('/animais/porte/:porte', FiltroController.filtrarPorte);

module.exports = router;