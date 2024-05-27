const express = require('express');
const app = express();
const PORT = 3000;

const beerRoutes = require('./api/routes/beer.route');
const breweryRoutes = require('./api/routes/brewery.route');

app.use(express.json());

app.use('/api/beer', beerRoutes);
app.use('/api/brewery', breweryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});