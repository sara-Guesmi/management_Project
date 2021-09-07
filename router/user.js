const express = require("express");
const router = express.Router();
const {
  Signup,
  SignIn,
  getAllChef,
} = require("../controllers/user.controllers");
const isAuth = require("../middleware/auth");
const isVerified = require("../middleware/isVerified");
const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middleware/user");

router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, isVerified, SignIn);

router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
