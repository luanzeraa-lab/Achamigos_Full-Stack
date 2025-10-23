require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const multer = require("multer");
const fs = require("fs");
const { ppid } = require('process');

console.log("MONGO_URI =", process.env.MONGO_URI);

const animalRoute = require('./routes/AnimalRoute');
const userRoute = require('./routes/UserRoute');
const filtroRoute = require('./routes/FiltroRoute');
const eventoRoute = require('./routes/EventoRoute')

const app = express();
const apiKeyAuth = require('./middleware/apiKeyAuth')
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(apiKeyAuth)

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/public', express.static(`${__dirname}/public`));

app.use(animalRoute);
app.use(userRoute);
app.use(eventoRoute);
app.use('/filtros', filtroRoute);

const port = 3002;

//----------------CONEXÃO COM MONGO------------
const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexão com o banco de dados bem sucedida")
  } catch (error) {

    console.log("Erro: ", error)
  }
};
connectDB()


//---------SALVAMENTO DE IMAGENS----------
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, `${__dirname}/public`)
  },
  filename: function(req, file, cb){
    cb(null, Date.now() +".jpg");
  }
});
const upload = multer({storage})
    

    
app.listen (port, ()=>{
    console.log(`servidor iniciado com sucesso na porta ${port}`);
});