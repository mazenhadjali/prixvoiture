const OptionModel = require("../models/option.model");


const createOption = async (optionData) => {
    const option = new OptionModel(optionData);
    await option.save();
    return option;
};

const findAllOptions = async () => {
    return OptionModel.find().populate('fichetechnique optionparent');
};

const findOptionById = async (id) => {
    return OptionModel.findById(id).populate('fichetechnique optionparent');
};

const updateOption = async (id, optionData) => {
    return OptionModel.findByIdAndUpdate(id, optionData, { new: true });
};

const deleteOption = async (id) => {
    await OptionModel.findByIdAndDelete(id);
    return { message: 'Option deleted successfully.' };
};

module.exports = {
    createOption,
    findAllOptions,
    findOptionById,
    updateOption,
    deleteOption
};