const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        fichetechnique: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'fichetechnique'
        },
        optionparent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'option',
            default: null
        },
        nom: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 256
        },
        valeur: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);


const OptionModel = mongoose.model("option", schema);

module.exports = OptionModel;