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
            ref: 'option'
        },
        nom: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 256
        },
        valeur: {
            type: Number,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);


const OptionModel = mongoose.model("option", schema);

module.exports = OptionModel;