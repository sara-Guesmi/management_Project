const express = require("express");
const { ChangeStatus } = require("../controllers/admin.controllers");
const isAdmin = require("../middleware/admin");
const router = express.Router();
const isAuth = require("../middleware/auth");

router.put("/changeStatus/:id", isAuth, isAdmin, ChangeStatus);

module.exports = router;
