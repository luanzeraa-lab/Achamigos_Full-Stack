const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')

router.post('/users', userController.cadastrarUser)
router.put('/users/:id', userController.alterarUser)
router.delete('/users/:id', userController.excluirUser)

module.exports = router;
