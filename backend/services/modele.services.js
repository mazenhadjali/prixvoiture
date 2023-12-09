// ModeleService.js

const { response } = require("express");
const ModeleModel = require("../models/modele.model");
const VersionModel = require("../models/version.model");


const createModele = async (modeleData) => {
    const modele = new ModeleModel(modeleData);
    await modele.save();
    return modele;
};

const findAllModeles = async () => {
    return await ModeleModel.find().populate('marque');
};

const findModeleById = async (id) => {
    const response = await ModeleModel.findById(id).populate('marque');
    if (!response) {
        // Handle the case where the model is not found
        return null;
    }
    const versions = await VersionModel.find({ modele: id });
    // Convert the Mongoose document to a plain JavaScript object if necessary
    const modeleData = response.toObject ? response.toObject() : response;
    return { ...modeleData, versions: versions };
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