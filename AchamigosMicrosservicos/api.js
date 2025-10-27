require('dotenv').config(); 
const express = require("express"); 
const cors = require("cors"); 
const mongoose = require('mongoose'); 
const userRoutes = require('./routes/UserRoute'); 
const apiKeyAuth = require('./middlewares/apiKeyAuth');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();


app.use(express.json()); 
app.use(cors({ origin: "*" }));


app.use('/public', express.static('public', { fallthrough: true }));


const swaggerOptions = {
  customCssUrl: '/public/custom.css',
  customSiteTitle: "API Achamigos",
  customfavIcon: "/public/fav2.png",
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

app.get("/", (req, res) => {
  res.json({ message: "🚀 Microsserviço Achamigos rodando com sucesso!" });
});

app.use(apiKeyAuth);
app.use(userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conexão com o banco de dados bem-sucedida!"))
  .catch(err => console.log("❌ Erro ao conectar ao banco de dados:", err));

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 5001;
  app.listen(port, () => {
    console.log(`🚀 Servidor local iniciado na porta ${port}`);
  });
}


module.exports = app;
