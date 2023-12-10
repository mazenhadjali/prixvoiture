// FicheTechniqueRouter.js
const express = require('express');
const router = express.Router();
const ficheTechniqueService = require('../services/fichetechnique.services');

// Create a new Fiche Technique
router.post('/fichetechniques', async (req, res) => {
    try {
        const ficheTechnique = await ficheTechniqueService.createFicheTechnique(req.body);
        res.status(201).json(ficheTechnique);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Fiche Technique', error });
    }
});

// Get all Fiches Techniques
router.get('/fichetechniques', async (req, res) => {
    try {
        const fichesTechniques = await ficheTechniqueService.findAllFichesTechniques();
        res.status(200).json(fichesTechniques);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Fiches Techniques', error });
    }
});

// Get a Fiche Technique by ID version
router.get('/:id', async (req, res) => {
    try {
        const ficheTechnique = await ficheTechniqueService.findFicheTechniqueById(req.params.id);
        res.status(200).json(ficheTechnique);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Fiche Technique', error });
    }
});

// Update a Fiche Technique by ID
router.put('/fichetechniques/:id', async (req, res) => {
    try {
        const updatedFicheTechnique = await ficheTechniqueService.updateFicheTechnique(req.params.id, req.body);
        res.status(200).json(updatedFicheTechnique);
    } catch (error) {
        res.status(500).json({ message: 'Error updating Fiche Technique', error });
    }
});

// Delete a Fiche Technique by ID
router.delete('/fichetechniques/:id', async (req, res) => {
    try {
        const response = await ficheTechniqueService.deleteFicheTechnique(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Fiche Technique', error });
    }
});

module.exports = router;