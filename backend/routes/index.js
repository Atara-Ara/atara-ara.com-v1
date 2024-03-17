const express = require('express');
const router = express.Router();
const releasesRouter = require('./releases');

router.get('/', (req, res) => {
    res.send('Success');
});

router.use('/releases', releasesRouter);

module.exports = router;
