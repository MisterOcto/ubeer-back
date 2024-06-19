const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3000/api-docs/', 'https://ubeer-back-wgw6.onrender.com/api-docs/'],
    optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);
