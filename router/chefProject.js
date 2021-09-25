const express = require("express");
const router = express.Router();
const {
  getProfile,
  getAllChef,
  postProfile,
  editProfile,
} = require("../controllers/chefProject.controllers");
const isAuth = require("../middleware/auth");
const isChef = require("../middleware/isChef");

// router.post("/profile", Signup);
// router.put("/profile", Signup);
router.get("/approved", isAuth, getAllChef);

router.get("/:id", isAuth, getProfile);
router.post("/", isAuth, isChef, postProfile);
router.put("/:id", isAuth, isChef, editProfile);
module.exports = router;
