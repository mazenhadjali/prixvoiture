// OptionRouter.js

const express = require('express');
const router = express.Router();
const optionService = require('../services/option.services'); // Update the path to where your Option service is located

// Create a new Option
router.post('/', async (req, res) => {
    try {
        const option = await optionService.createOption(req.body);
        res.status(201).json(option);
    } catch (error) {
        res.status(500).json({ message: 'Error creating option', error });
    }
});

// Get all Options
router.get('/options', async (req, res) => {
    try {
        const options = await optionService.findAllOptions();
        res.status(200).json(options);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching options', error });
    }
});

// Get an Option by ID
router.get('/fiche/:id', async (req, res) => {
    try {
        const option = await optionService.findOptionsByIdfiche(req.params.id);
        res.status(200).json(option);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching option', error });
    }
});

// Update an Option by ID
router.put('/options/:id', async (req, res) => {
    try {
        const updatedOption = await optionService.updateOption(req.params.id, req.body);
        res.status(200).json(updatedOption);
    } catch (error) {
        res.status(500).json({ message: 'Error updating option', error });
    }
});

// Delete an Option by ID
router.delete('/options/:id', async (req, res) => {
    try {
        const response = await optionService.deleteOption(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting option', error });
    }
});

module.exports = router;