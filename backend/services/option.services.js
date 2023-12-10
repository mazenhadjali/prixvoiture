const OptionModel = require("../models/option.model");


const createOption = async (optionData) => {
    const option = new OptionModel(optionData);
    await option.save();
    return option;
};

const findAllOptions = async () => {
    return OptionModel.find().populate('fichetechnique optionparent');
};

// A utility function to recursively populate the suboptions
// It will attach a new property 'suboptions' to every document populated
const recursivelyPopulateSuboptions = async (options) => {
    for (let option of options) {
        // Populate the 'optionparent' field in the suboptions
        const suboptions = await OptionModel.find({ optionparent: option._id })
                                             .populate('fichetechnique optionparent');
        // Recursively populate suboptions for each suboption
        option._doc.suboptions = await recursivelyPopulateSuboptions(suboptions);
    }
    return options;
};

const findOptionsByIdfiche = async (id) => {
    // Initially, find the top-level options only (where 'optionparent' field is null)
    let options = await OptionModel.find({ fichetechnique: id, optionparent: null })
                                   .populate('fichetechnique optionparent');
    
    // Recursively populate 'suboptions' for the top-level options
    options = await recursivelyPopulateSuboptions(options);

    return options;
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
    findOptionsByIdfiche,
    updateOption,
    deleteOption
};