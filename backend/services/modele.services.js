// ModeleService.js

const ModeleModel = require("../models/modele.model");


const createModele = async (modeleData) => {
    const modele = new ModeleModel(modeleData);
    await modele.save();
    return modele;
};

const findAllModeles = async () => {
    return await ModeleModel.find().populate('marque');
};

const findModeleById = async (id) => {
    return await ModeleModel.findById(id).populate('marque');
};

const updateModele = async (id, modeleData) => {
    const updatedModele = await ModeleModel.findByIdAndUpdate(id, modeleData, { new: true });
    return updatedModele;
};

const deleteModele = async (id) => {
    await ModeleModel.findByIdAndDelete(id);
    return { message: 'Modele deleted successfully.' };
};

module.exports = {
    createModele,
    findAllModeles,
    findModeleById,
    updateModele,
    deleteModele
};