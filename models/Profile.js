const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProfileSchema = new Schema({
  id_chef: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },
  dateOfBirth: { type: Date, required: true },
  phoneNumber: { type: Number, required: true },
  domain: { type: String, required: true },
  adresse: { type: String, required: true },
  departement: { type: String, required: true }, //if there is a categories of departement??
  gender: { type: String, enum: ["male", "female"], required: true },
});

module.exports = Profile = model("profile", ProfileSchema);
