const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    modele: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'modele'
    },
    nom: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 256
    },
    annee: {
      type: Number,
      required: true,
      maxlength: 5,
      minlength: 4
    },
    difference: {
      type: Number,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);


const VersionModel = mongoose.model("version", schema);

module.exports = VersionModel;