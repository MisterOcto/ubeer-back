const jwt = require("jsonwebtoken");
require('dotenv').config();

const tokenController = {
    generateToken: async (userData) => {
        try {
            const token = await jwt.sign(userData, process.env.JWT_KEY)
            return token
        } catch(err) {
            console.log(err)
            return
        }
    },
    verifyToken: async (token) => {
        try {
            const jwtToken = await jwt.verify(token, process.env.JWT_KEY)
            return jwtToken
        }
        catch(err){
            // token invalide
            return undefined
        }
    }
};

module.exports = tokenController;