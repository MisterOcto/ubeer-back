// swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'A simple Express API',
        },
    },
    // Path to the API docs
    apis: ['api/routes/*.js'], // Point to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
