const express = require("express");
const router = express.Router();
const {
  getProfile,
  getAllChef,
} = require("../controllers/chefProject.controllers");
const isAuth = require("../middleware/auth");

// router.post("/profile", Signup);
// router.put("/profile", Signup);
router.get("/", isAuth, getAllChef);

router.get("/:id", isAuth, getProfile);
module.exports = router;
