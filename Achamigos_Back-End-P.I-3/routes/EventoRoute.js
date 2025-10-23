const express = require('express');
const router = express.Router();
const multer = require("multer");
const EventoController = require('../controllers/EventoController');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, __dirname + "/../public");;
  },
  filename: function(req, file, cb){
    cb(null, Date.now() +".jpg");
  }
});
const upload = multer({storage})
    

router.get('/eventos', EventoController.listarEvento)
router.post('/eventos', upload.single('imagem'), EventoController.cadastrarEvento);
router.put('/eventos/:id', EventoController.alterarEvento);
router.delete('/eventos/:id', EventoController.excluirEvento);

module.exports = router;
