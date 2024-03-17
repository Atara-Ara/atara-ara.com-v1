const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const releasesDataPath = path.join(__dirname, '../data/releases.json');

router.get('/', (req, res) => {
    fs.readFile(releasesDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${releasesDataPath}:`, err);
            return res.status(500).json({ error: `Error reading ${releasesDataPath}:` });
        }
        
        try {
            const releases = JSON.parse(data);
            res.json(releases);
        } catch (error) {
            console.error(`Error parsing ${releasesDataPath}:`, error);
            res.status(500).json({ error: `Error parsing ${releasesDataPath}:` });
        }
    });
});

router.get('/:id', (req, res) => {
    fs.readFile(releasesDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${releasesDataPath}:`, err);
            return res.status(500).json({ error: `Error reading ${releasesDataPath}:` });
        }
        
        try {
            const releases = JSON.parse(data);
            const release = releases.releases.find(release => release.id === req.params.id.toString());
            if (release) {
                res.json(release);
            } else {
                res.status(404).json({ error: `Release with id ${req.params.id} not found` });
            }
        } catch (error) {
            console.error(`Error parsing ${releasesDataPath}:`, error);
            res.status(500).json({ error: `Error parsing ${releasesDataPath}:` });
        }
    });
});


module.exports = router;
