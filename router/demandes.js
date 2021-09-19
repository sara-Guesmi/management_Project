const express = require("express");
const {
  addDemande,
  getDemandeClient,
  getDemandeChef,
  updateDemande,
  deleteDemande,
  getAcceptedDemandeChef,
  getDemande,
  updateStatus,
} = require("../controllers/demandes.controllers");
const router = express.Router();
const isAuth = require("../middleware/auth");
const isChef = require("../middleware/isChef");
const isClient = require("../middleware/isClient");

router.post("/:id_chef", isAuth, isClient, addDemande);
router.get("/chef", isAuth, isChef, getDemandeChef);

router.get("/client", isAuth, isClient, getDemandeClient);
router.get("/:id_demande", isAuth, isClient, getDemande);

router.get("/accepteddemandechef", isAuth, isChef, getAcceptedDemandeChef);

router.put("/:id_demande", isAuth, isClient, updateDemande);
router.put("/updateState/:id_demande", isAuth, isChef, updateStatus);

router.delete("/:id_demande", isAuth, isClient, deleteDemande);

module.exports = router;
