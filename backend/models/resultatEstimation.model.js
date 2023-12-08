const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        estimationVoiture: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'estimationVoiture'
        },
        kilometrage: {
            required: true,
            type: Number,
        },
        dMiseEnCirculation: {
            required: true,
            type: Date,
        },
        prix_estimation: {
            required: true,
            type: Number,
        },
        etat: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
    }
);


const ResultatEstimation = mongoose.model("resultatestimation", schema);

module.exports = ResultatEstimation;