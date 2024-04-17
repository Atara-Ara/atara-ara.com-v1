const express = require('express');
const router = express.Router();
const homeRouter = require('./home');
const releasesRouter = require('./releases');
const showsRouter = require('./shows');

router.get('/', (req, res) => {
    res.send('Success');
});

router.use('/home', homeRouter);
router.use('/releases', releasesRouter);
router.use('/shows', showsRouter);

module.exports = router;
