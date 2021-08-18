const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/project_saif", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected", error);
  }
};

module.exports = connectDB;
