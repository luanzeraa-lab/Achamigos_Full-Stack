const swaggerAutogen = require('swagger-autogen')();

const docs = {
  info: {
    title: 'Microsserviço Achamigos',
    description: 'Documentação do cadastro de usuário usando Swagger',
  },
  host: 'localhost:5001',
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
const endpointsFiles = ['./api.js', './routes/UserRoute.js'];

swaggerAutogen(outputFile, endpointsFiles, docs);
