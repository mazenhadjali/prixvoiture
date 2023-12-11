// VersionRouter.js

const express = require('express');
const router = express.Router();
const versionService = require('../services/version.services'); // Update the path to the location of your service file

// Create a new Version
router.post('/', async (req, res) => {
    try {
        const version = await versionService.createVersion(req.body);
        res.status(201).json(version);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error creating version', error });
    }
});

// Get all Versions
router.get('/versions', async (req, res) => {
    try {
        const versions = await versionService.findAllVersions();
        res.status(200).json(versions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching versions', error });
    }
});

// Get all Versions by modele id
router.get('/modele/:id', async (req, res) => {
    try {
        const versions = await versionService.findAllVersionsbymodeleid(req.params.id);
        res.status(200).json(versions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching versions', error });
    }
});



// Get Version by ID
router.get('/versions/:id', async (req, res) => {
    try {
        const version = await versionService.findVersionById(req.params.id);
        res.status(200).json(version);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching version', error });
    }
});

// Update Version by ID
router.put('/versions/:id', async (req, res) => {
    try {
        const updatedVersion = await versionService.updateVersion(req.params.id, req.body);
        res.status(200).json(updatedVersion);
    } catch (error) {
        res.status(500).json({ message: 'Error updating version', error });
    }
});

// Delete Version by ID
router.delete('/versions/:id', async (req, res) => {
    try {
        const response = await versionService.deleteVersion(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting version', error });
    }
});

module.exports = router;