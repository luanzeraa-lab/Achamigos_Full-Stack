const express = require('express');
const router = express.Router();
const multer = require("multer");
const animalController = require('../controllers/AnimalController')


 const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, __dirname + "/../public");;
  },
  filename: function(req, file, cb){
    cb(null, Date.now() +".jpg");
  }
});
const upload = multer({storage})
    
router.get('/animais', (animalController.listarAnimal));
router.post('/animais', upload.single('imagem'), animalController.cadastrarAnimal);
router.put('/animais/:id', (animalController.alterarAnimal));
router.delete('/animais/:id', (animalController.excluirAnimal));


module.exports = router;