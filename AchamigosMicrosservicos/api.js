require('dotenv').config(); 
const express = require("express"); 
const cors = require("cors"); 
const mongoose = require('mongoose'); 
const userRoutes = require('./routes/UserRoute'); 


const app = express(); 
app.use(express.json()); 
app.use(cors({ origin: "*" })); 
app.use(userRoutes);

const port = 5001; 


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conexão com o banco de dados bem sucedida");
    app.listen(port, () => {
      console.log(`Servidor iniciado com sucesso na porta ${port}`);
    });
  })
  .catch(err => {
    console.log("Erro ao conectar ao banco de dados:", err);
  });

