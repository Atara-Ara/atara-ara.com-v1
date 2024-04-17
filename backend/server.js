const config = require('../config');
const express = require('express');
const path = require('path');
const router = require('./routes/index');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const https = require('https');

const app = express();

app.use(cors(
    {
        origin: config.FRONTEND_URL,
        credentials: true,
    }
));

app.use('/', router);

app.use('/images', express.static(path.join(__dirname, 'images')));

const privateKey = fs.readFileSync('./ssl/private.key', 'utf8');
const certificate = fs.readFileSync('./ssl/private/certificate.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(config.BACKEND_PORT, () => {
    console.log(`Backend for ${config.FRONTEND_URL} is running on HTTPS port ${config.BACKEND_PORT}. Make API calls to ${config.BACKEND_URL}`);
});
