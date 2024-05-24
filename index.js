const express = require('express');
const app = express();
const PORT = 3000;

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.get("/beer", async (req, res) => {
    const products = await prisma.beer.findMany();

    res.send(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});