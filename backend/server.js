require('dotenv').config();
const express = require('express');
const path = require('path');

const router = require('./routes/index');

const app = express();
const port = process.env.PORT || 4000;

app.use('/', router);

app.use(express.static(path.join(__dirname, 'images')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
