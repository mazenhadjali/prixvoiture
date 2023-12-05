const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    version: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'version'
  },
  },
  {
    timestamps: true,
  }
);


const FicheTechniqueModel = mongoose.model("fichetechnique", schema);

module.exports = FicheTechniqueModel;