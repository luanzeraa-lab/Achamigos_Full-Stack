require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');

const userRoutes = require('./routes/UserRoute');
const apiKeyAuth = require('./middlewares/apiKeyAuth');

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use('/public', express.static('public', { fallthrough: true }));

const swaggerDocument = require('./swagger-output.json'); 
const swaggerOptions = {
  customCssUrl: '/public/custom.css',
  customSiteTitle: "API Achamigos",
  customfavIcon: "/public/fav2.png",
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

app.get("/", (req, res) => {
  res.json({ message: "🚀 API Achamigos rodando com sucesso!" });
});

app.use(apiKeyAuth);

app.use('/api', userRoutes);   

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conexão com o banco de dados bem-sucedida!"))
  .catch(err => console.log("❌ Erro ao conectar ao banco de dados:", err));

const port = process.env.PORT || 3002;
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});

module.exports = app;
