// ModeleRouter.js

const express = require('express');
const router = express.Router();
const modeleService = require('../services/modele.services'); // Adjust the path as needed

// Create a new Modele
router.post('/modeles', async (req, res) => {
    try {
        const modele = await modeleService.createModele(req.body);
        res.status(201).json(modele);
    } catch (error) {
        res.status(500).json({ message: 'Error creating modele', error });
    }
});

// Get all Modeles
router.get('/modeles', async (req, res) => {
    try {
        const modeles = await modeleService.findAllModeles();
        res.status(200).json(modeles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching modeles', error });
    }
});

// Get Modele by ID
router.get('/modeles/:id', async (req, res) => {
    try {
        const modele = await modeleService.findModeleById(req.params.id);
        res.status(200).json(modele);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching modele', error });
    }
});

// Update Modele by ID
router.put('/modeles/:id', async (req, res) => {
    try {
        const updatedModele = await modeleService.updateModele(req.params.id, req.body);
        res.status(200).json(updatedModele);
    } catch (error) {
        res.status(500).json({ message: 'Error updating modele', error });
    }
});

// Delete Modele by ID
router.delete('/modeles/:id', async (req, res) => {
    try {
        const message = await modeleService.deleteModele(req.params.id);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting modele', error });
    }
});

module.exports = router;