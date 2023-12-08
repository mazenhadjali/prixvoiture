const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        
        isActive: {
            required: true,
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
    }
);


const ResultatEstimation = mongoose.model("estimationVoiture", schema);

module.exports = ResultatEstimation;