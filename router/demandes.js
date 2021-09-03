const express = require("express");
const {
  addDemande,
  getDemandeClient,
  getDemandeChef,
  updateDemande,
  deleteDemande,
  getAcceptedDemandeChef,
} = require("../controllers/demandes.controllers");
const router = express.Router();
const isAuth = require("../middleware/auth");
const isChef = require("../middleware/isChef");
const isClient = require("../middleware/isClient");

router.post("/", isAuth, isClient, addDemande);

router.get("/client", isAuth, isClient, getDemandeClient);

router.get("/chef", isAuth, isChef, getDemandeChef);

router.get("/accepteddemandechef", isAuth, isChef, getAcceptedDemandeChef);

router.put("/:id", isAuth, isClient, updateDemande);

router.delete("/:id", isAuth, isClient, deleteDemande);

module.exports = router;
