// VersionService.js

const FicheTechniqueModel = require("../models/fichetechnique.model");
const VersionModel = require("../models/version.model");


const createVersion = async (versionData) => {
    const version = new VersionModel(versionData);
    await version.save();

    // Create an instance of FicheTechniqueModel, set the version, and save it.
    const ficheTechnique = new FicheTechniqueModel({ version: version._id });
    await ficheTechnique.save();

    return version;
};

const findAllVersions = async () => {
    return VersionModel.find().populate('modele');
};

const findAllVersionsbymodeleid = async (id) => {
    return VersionModel.find({ modele: id }).populate('modele');
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
    findAllVersionsbymodeleid,
    createVersion,
    findAllVersions,
    findVersionById,
    updateVersion,
    deleteVersion
};