const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DemandeSchema = new Schema({
  id_client: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  id_chef: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  text: { type: String, required: true },
  dueDate: { type: Date, required: true },

  approved: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ["send", "pending", "done"],
    default: "send",
  },
});

module.exports = Demande = model("demande", DemandeSchema);
