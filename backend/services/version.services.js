// VersionService.js

const VersionModel = require("../models/version.model");


const createVersion = async (versionData) => {
    const version = new VersionModel(versionData);
    await version.save();
    return version;
};

const findAllVersions = async () => {
    return VersionModel.find().populate('modele');
};

const findVersionById = async (id) => {
    return VersionModel.findById(id).populate('modele');
};

const updateVersion = async (id, versionData) => {
    return VersionModel.findByIdAndUpdate(id, versionData, { new: true });
};

const deleteVersion = async (id) => {
    await VersionModel.findByIdAndDelete(id);
    return { message: 'Version deleted successfully.' };
};

module.exports = {
    createVersion,
    findAllVersions,
    findVersionById,
    updateVersion,
    deleteVersion
};