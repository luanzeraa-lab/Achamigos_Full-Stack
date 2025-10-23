const swaggerAutogen = require('swagger-autogen')();

const docs = {
  info: {
    title: 'API Achamigos',
    description: 'Documentação da API Achamigos usando Swagger',
  },
  host: 'localhost:3002',
  schemes: ['http'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key',
      description: process.env.API_KEY,
    },
  },
  security: [{
    apiKeyAuth: []
  }],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./api.js', './routes/UserRoute.js', './routes/AnimalRoute.js', 
    './routes/FiltroRoute.js', './routes/EventoRoute.js'];

swaggerAutogen(outputFile, endpointsFiles, docs);
