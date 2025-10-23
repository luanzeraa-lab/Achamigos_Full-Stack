console.log(">>> Middleware apiKeyAuth carregado!");
require('dotenv').config(); 

module.exports = function (req, res, next) {
  
  const apiKey = req.header('x-api-key');

  
  console.log('API Key recebida:', apiKey);
  console.log('API Key esperada:', process.env.API_KEY);

 
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Api Key inválida ou ausente' });
  }

  
  next();
};