require('dotenv').config(); 
const express = require("express"); 
const cors = require("cors"); 
const mongoose = require('mongoose'); 
const userRoutes = require('./routes/UserRoute'); 
const apiKeyAuth = require('./middlewares/apiKeyAuth');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();

// 🧱 Middleware base
app.use(express.json()); 
app.use(cors({ origin: "*" }));

// 🖼️ Servir arquivos estáticos (CSS e imagens)
app.use('/public', express.static(`${__dirname}/public`));

// ⚙️ Swagger (com logo e CSS personalizado)
const swaggerOptions = {
  customCssUrl: '/public/custom.css',
  customSiteTitle: "API Achamigos",
  customfavIcon: "/public/AchamigosFav.png",
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// 🔐 Protege o restante da API com API key
app.use(apiKeyAuth);

// Rotas protegidas
app.use(userRoutes);

const port = 5001; 

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conexão com o banco de dados bem-sucedida!");
    app.listen(port, () => {
      console.log(`🚀 Servidor iniciado com sucesso na porta ${port}`);
    });
  })
  .catch(err => {
    console.log("Erro ao conectar ao banco de dados:", err);
  });
