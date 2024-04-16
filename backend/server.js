const config = require('../config');
const express = require('express');
const path = require('path');
const router = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(cors(
    {
        origin: config.FRONTEND_URL,
        credentials: true,
    }
));

app.use('/', router);

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(config.BACKEND_PORT, () => {
    console.log(`Backend for ${config.FRONTEND_URL} is running on http://localhost:${config.BACKEND_PORT}. Make API calls to ${config.BACKEND_URL}`);
});
