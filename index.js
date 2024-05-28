const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.config');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const beerRoutes = require('./api/routes/beer.route');
const breweryRoutes = require('./api/routes/brewery.route');

app.use(express.json());


app.use('/beer', beerRoutes);
app.use('/brewery', breweryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});