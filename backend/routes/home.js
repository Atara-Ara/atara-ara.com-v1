const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const homeDataPath = path.join(__dirname, '../data/home.json');

router.get('/', (req, res) => {
    fs.readFile(homeDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${homeDataPath}:`, err);
            return res.status(500).json({ error: `Error reading ${homeDataPath}:` });
        }
        
        try {
            const home = JSON.parse(data);
            res.json(home);
        } catch (error) {
            console.error(`Error parsing ${homeDataPath}:`, error);
            res.status(500).json({ error: `Error parsing ${homeDataPath}:` });
        }
    });
});

module.exports = router;
