const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 256
    },

  },
  {
    timestamps: true,
  }
);


const ModeleModel = mongoose.model("modele", schema);

module.exports = ModeleModel;