const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    nom: {
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


const MarqueModel = mongoose.model("marque", schema);

module.exports = MarqueModel;