require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const multer = require("multer");

const animalRoute = require('./routes/AnimalRoute');
const userRoute = require('./routes/UserRoute');
// const filtroRoute = require('./routes/FiltroRoute');
const eventoRoute = require('./routes/EventoRoute');

const apiKeyAuth = require('./middleware/apiKeyAuth');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
  res.json({ message: "🚀 Api Achamigos rodando com sucesso!" });
});

app.get('/swagger-output.json', (req, res) => {
  res.sendFile(__dirname + '/swagger-output.json')
})

const swaggerOptions = {
  customCssUrl: '/public/custom.css',
  customSiteTitle: "API Achamigos",
  customfavIcon: "/public/fav2.png",
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

app.use(apiKeyAuth);
app.use('/api',animalRoute);
app.use('/api',userRoute);
app.use('/api',eventoRoute);
// app.use('/filtros', filtroRoute);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conexão com o banco de dados bem-sucedida!"))
  .catch(err => console.log("❌ Erro ao conectar ao banco de dados:", err));

const port = process.env.PORT || 3002;
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});



const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public'),
  filename: (req, file, cb) => cb(null, Date.now() + ".jpg")
});
const upload = multer({ storage });

module.exports = app;
