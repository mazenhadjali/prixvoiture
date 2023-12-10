// FicheTechniqueService.js

const FicheTechniqueModel = require("../models/fichetechnique.model");

const createFicheTechnique = async (ficheTechniqueData) => {
    const ficheTechnique = new FicheTechniqueModel(ficheTechniqueData);
    await ficheTechnique.save();
    return ficheTechnique;
};

const findAllFichesTechniques = async () => {
    return FicheTechniqueModel.find().populate('version');
};

const findFicheTechniqueById = async (id) => {
    return FicheTechniqueModel.findOne({ version: id }).populate('version');
};

const updateFicheTechnique = async (id, ficheTechniqueData) => {
    return FicheTechniqueModel.findByIdAndUpdate(id, ficheTechniqueData, { new: true });
};

const deleteFicheTechnique = async (id) => {
    await FicheTechniqueModel.findByIdAndDelete(id);
    return { message: 'Fiche Technique deleted successfully.' };
};

module.exports = {
    createFicheTechnique,
    findAllFichesTechniques,
    findFicheTechniqueById,
    updateFicheTechnique,
    deleteFicheTechnique
};