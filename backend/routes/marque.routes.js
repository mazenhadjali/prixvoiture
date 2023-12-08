const { createMarque, getAllMarques, getMarqueById, updateMarque, deleteMarque } = require('../services/marque.services');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const marques = await getAllMarques();
        res.status(200).json(marques);
    } catch (err) {
        res.status(500).send('Something went wrong with fetching all marques.');
    }
});

router.post('/marque', async (req, res) => {
    try {
        const marque = await createMarque(req.body);
        res.status(200).json(marque);
    } catch (err) {
        console.log(err)
        res.status(500).send('Something went wrong with creating a new marque.');
    }
});



router.get('/marque/:id', async (req, res) => {
    try {
        const marque = await getMarqueById(req.params.id);
        res.status(200).json(marque);
    } catch (err) {
        res.status(500).send('Something went wrong with fetching the marque.');
    }
});

router.put('/marque/:id', async (req, res) => {
    try {
        const updatedMarque = await updateMarque(req.params.id, req.body);
        res.status(200).json(updatedMarque);
    } catch (err) {
        res.status(500).send('Something went wrong with updating the marque.');
    }
});

router.delete('/marque/:id', async (req, res) => {
    try {
        const result = await deleteMarque(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).send('Something went wrong with deleting the marque.');
    }
});

module.exports = router;