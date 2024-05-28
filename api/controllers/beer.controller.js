const prisma = require("../db");

const BeerController = {

    getAllBeers: async (req, res) => {
        const beer = await prisma.beer.findMany();

        res.send(beer);
    },

    getBeerById: async (req, res) => {
        const beerId = parseInt(req.params.id);
        const beer = await prisma.beer.findUnique({
            where: {
                id: beerId
            }
        });

        if (!beer) {
            return res.status(404).send("Beer not found");
        }
        else {
            res.send(beer)
        }
    },

    createBeer: async (req, res) => {
        const newBeerData = req.body;
        const beer = await prisma.beer.create({
            data: {
                name: newBeerData.name,
                abv: newBeerData.abv,
                ibu: newBeerData.ibu,
                imageUrl: newBeerData.imageUrl,
                categorie: newBeerData.categorie,
                format: newBeerData.format
            }
        });
        res.send("Create beer success !");
    },

    deleteBeer: async (req, res) => {
        const beerId = parseInt(req.params.id);
        await prisma.beer.delete({
            where: {
                id: beerId
            }
        });
        res.send("Delete beer success !");
    },

    updateBeer: async (req, res) => {
        const beerId = parseInt(req.params.id);
        const newBeerData = req.body;
        await prisma.beer.update({
            where: {
                id: beerId
            },
            data: {
                name: newBeerData.name,
                abv: newBeerData.abv,
                ibu: newBeerData.ibu,
                imageUrl: newBeerData.imageUrl,
                categorie: newBeerData.categorie,
                format: newBeerData.format
            }
        })

        res.send("Update beer success !");
    },

    updatePartialBeer: async (req, res) => {
        const beerId = parseInt(req.params.id);
        const newBeerData = req.body;
        await prisma.beer.update({
            where: {
                id: beerId
            },
            data: {
                name: newBeerData.name,
                abv: newBeerData.abv,
                ibu: newBeerData.ibu,
                imageUrl: newBeerData.imageUrl,
                categorie: newBeerData.categorie,
                format: newBeerData.format
            }
        })

        res.send("Update beer success !");
    }

};

module.exports = BeerController;