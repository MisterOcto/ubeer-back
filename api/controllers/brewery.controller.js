const prisma = require("../db");

const BreweryController = {

    getAllBrewerys: async (req, res) => {
        const brewery = await prisma.brewery.findMany();

        res.send(brewery);
    },

    getBreweryById: async (req, res) => {
        const breweryId = parseInt(req.params.id);
        const brewery = await prisma.brewery.findUnique({
            where: {
                id: breweryId
            }
        });

        if (!brewery) {
            return res.status(404).send("Brewery not found");
        }
        else {
            res.send(brewery)
        }
    },

    createBrewery: async (req, res) => {
        const newBreweryData = req.body;
        const brewery = await prisma.brewery.create({
            data: {
                name: newBreweryData.name,
                city: newBreweryData.city,
                adress: newBreweryData.adress
            }
        });
        res.send("Create brewery success !");
    },

    deleteBrewery: async (req, res) => {
        const breweryId = parseInt(req.params.id);
        await prisma.brewery.delete({
            where: {
                id: breweryId
            }
        });
        res.send("Delete brewery success !");
    },

    updateBrewery: async (req, res) => {
        const breweryId = parseInt(req.params.id);
        const newBreweryData = req.body;
        await prisma.brewery.update({
            where: {
                id: breweryId
            },
            data: {
                name: newBreweryData.name,
                city: newBreweryData.city,
                adress: newBreweryData.adress
            }
        })

        res.send("Update brewery success !");
    },

    updatePartialBrewery: async (req, res) => {
        const breweryId = parseInt(req.params.id);
        const newBreweryData = req.body;
        await prisma.brewery.update({
            where: {
                id: breweryId
            },
            data: {
                name: newBreweryData.name,
                city: newBreweryData.city,
                adress: newBreweryData.adress
            }
        })

        res.send("Update brewery success !");
    }

};

module.exports = BreweryController;