const prisma = require("../config/prismaClient");

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
            },
            include: {
                brewery: true,
                format: true
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
        console.log('New beer data:', newBeerData);
        const beer = await prisma.beer.create({
            data: {
                name: newBeerData.name,
                abv: newBeerData.abv,
                ibu: newBeerData.ibu,
                imageUrl: newBeerData.imageUrl,
                categorie: newBeerData.categorie,
                format: newBeerData.format,
                price: newBeerData.price,
                breweryId: newBeerData.breweryId,
                formatId: newBeerData.formatId
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