const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();
require("dotenv").config();

// connect DB
connectDB();
// middleware global
app.use(express.json());
// router
app.use("/api/user", require("./router/user"));
app.use("/api/admin", require("./router/admin"));
app.use("/api/demande", require("./router/demandes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);
