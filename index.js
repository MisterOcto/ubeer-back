const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const cors = require('./api/config/cors');
app.use(cors);

const beerRoutes = require('./api/routes/beer.route');
const breweryRoutes = require('./api/routes/brewery.route');
const usersRoutes = require('./api/routes/user.route');

app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./api/config/swagger.config');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/beer', beerRoutes);
app.use('/brewery', breweryRoutes);
app.use('/user', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});