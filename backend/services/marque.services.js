const MarqueModel = require("../models/marque.model");

const createMarque = async (marqueData) => {
    const newMarque = new MarqueModel(marqueData);
    await newMarque.save();
    return newMarque;
};

const getAllMarques = async () => {
    return MarqueModel.find();
};

const getMarqueById = async (id) => {
    return MarqueModel.findById(id);
};

const updateMarque = async (id, updateData) => {
    const updatedMarque = await MarqueModel.findByIdAndUpdate(id, updateData, { new: true });
    return updatedMarque;
};

const deleteMarque = async (id) => {
    await MarqueModel.findByIdAndDelete(id);
    return { message: 'Marque deleted successfully.' };
};

module.exports = {
    createMarque,
    getAllMarques,
    getMarqueById,
    updateMarque,
    deleteMarque
};