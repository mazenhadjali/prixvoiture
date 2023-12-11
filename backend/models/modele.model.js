const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    marque: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'marque'
    },
    nom: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 256
    },

  },
  {
    timestamps: true,
  }
);


const ModeleModel = mongoose.model("modele", schema);

module.exports = ModeleModel;