const express = require('express');
const router = express.Router();
const homeRouter = require('./home');
const releasesRouter = require('./releases');

router.get('/', (req, res) => {
    res.send('Success');
});

router.use('/home', homeRouter);
router.use('/releases', releasesRouter);

module.exports = router;
