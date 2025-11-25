require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const multer = require("multer");
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const animalRoute = require('./routes/AnimalRoute');
const userRoute = require('./routes/UserRoute');
const eventoRoute = require('./routes/EventoRoute');

const apiKeyAuth = require('./middleware/apiKeyAuth');
const swaggerDocument = require('./swagger-output.json');

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/public', express.static('public'));

// Rotas básicas
app.get("/", (req, res) => {
  res.json({ message: "🚀 Api Achamigos rodando com sucesso!" });
});

// Swagger UI
const swaggerOptions = {
  customCssUrl: '/public/custom.css',
  customSiteTitle: "API Achamigos",
  customfavIcon: "/public/fav2.png",
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// Rotas da API
app.use(apiKeyAuth);
app.use('/api', animalRoute);
app.use('/api', userRoute);
app.use('/api', eventoRoute);

// Conexão MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conexão com o banco de dados bem-sucedida!"))
  .catch(err => console.log("❌ Erro ao conectar ao banco de dados:", err));

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public'),
  filename: (req, file, cb) => cb(null, Date.now() + ".jpg")
});
const upload = multer({ storage });

// Inicialização do servidor
const port = process.env.PORT || 3002;
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});

module.exports = app;
