require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routes/index');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true,
    }
));

app.use('/', router);

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
