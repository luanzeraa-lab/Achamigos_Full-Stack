require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const multer = require("multer");
const fs = require("fs");
const { ppid } = require('process');


const animalRoute = require('./routes/AnimalRoute');
const userRoute = require('./routes/UserRoute');
const filtroRoute = require('./routes/FiltroRoute');
const eventoRoute = require('./routes/EventoRoute');


const apiKeyAuth = require('./middleware/apiKeyAuth');


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');


const app = express();


app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/public', express.static(`${__dirname}/public`));


const swaggerOptions = {
  customCssUrl: '/public/custom.css',
  customSiteTitle: "API Achamigos",
  customfavIcon: "/public/AchamigosFav.png",
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));


app.use(apiKeyAuth);

// Rotas protegidas
app.use(animalRoute);
app.use(userRoute);
app.use(eventoRoute);
app.use('/filtros', filtroRoute);

//---------------- CONEXÃO COM MONGO ----------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexão com o banco de dados bem-sucedida!");
  } catch (error) {
    console.log("Erro ao conectar ao banco:", error);
  }
};
connectDB();

//---------------- SALVAMENTO DE IMAGENS ----------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/public`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpg");
  }
});
const upload = multer({ storage });

//---------------- INICIAR SERVIDOR ----------------
const port = 3002;
app.listen(port, () => {
  console.log(`🚀 Servidor iniciado com sucesso na porta ${port}`);
});
