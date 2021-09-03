const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DemandeSchema = new Schema({
  id_client: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  id_chef: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  text: { type: String, required: true },
  dueDate: { type: Date, required: true },

  approved: { type: Boolean, default: false },
});

module.exports = Demande = model("demande", DemandeSchema);
