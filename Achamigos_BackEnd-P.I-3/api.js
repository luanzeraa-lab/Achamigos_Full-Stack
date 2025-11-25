require('dotenv').config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');

const app = express();

// JSON do Swagger
const swaggerDocument = require('./swagger-output.json');

app.use(express.json());
app.use(cors({ origin: "*" }));

// Swagger UI
const swaggerOptions = {
  customCssUrl: '/public/custom.css',
  customSiteTitle: "Microsserviço Achamigos",
  customfavIcon: "/public/fav2.png",
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// Rotas do microsserviço
const userRoute = require('./routes/UserRoute');
app.use('/', userRoute);

// Endpoint raiz
app.get("/", (req, res) => {
  res.json({ message: "🚀 Microsserviço Achamigos rodando!" });
});

// Inicialização do servidor
const port = process.env.PORT || 5001;
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Microsserviço rodando na porta ${port}`);
});

module.exports = app;
