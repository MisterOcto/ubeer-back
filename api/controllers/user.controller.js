const prisma = require("../db");
const bcrypt = require("bcrypt");

const UserController = {

    getAllUsers: async (req, res) => {
        const user = await prisma.user.findMany();

        res.send(user);
    },

    getUserById: async (req, res) => {
        const userId = parseInt(req.params.id);
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            return res.status(404).send("User not found");
        }
        else {
            res.send(user)
        }
    },

    createUser: async (req, res) => {
        const newUserData = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email: newUserData.email,
            },
        });

        if (user) {
            res.send("Account already exists !");
        } else {
            //const saltRounds = await bcrypt.genSalt(10);
            await prisma.user.create({
                data: {
                    name: newUserData.name,
                    email: newUserData.email,
                    password: await bcrypt.hash(newUserData.password, 10)
                }
            });
            res.send("Account successfully created !");
        }
    },

    deleteUser: async (req, res) => {
        const userId = parseInt(req.params.id);
        await prisma.user.delete({
            where: {
                id: userId
            }
        });
        res.send("Delete user success !");
    },

    updateUser: async (req, res) => {
        const userId = parseInt(req.params.id);
        const newUserData = req.body;
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name: newUserData.name,
                email: newUserData.email,
                password: newUserData.password
            }
        })

        res.send("Update user success !");
    },

    updatePartialUser: async (req, res) => {
        const userId = parseInt(req.params.id);
        const newUserData = req.body;
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name: newUserData.name,
                email: newUserData.email,
                password: newUserData.password
            }
        })

        res.send("Update user success !");
    }

};

module.exports = UserController;