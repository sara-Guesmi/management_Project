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
  updateStatusToPending,
  updateStatusToDone,
} = require("../controllers/demandes.controllers");
const router = express.Router();
const isAuth = require("../middleware/auth");
const isChef = require("../middleware/isChef");
const isClient = require("../middleware/isClient");

router.get("/client/alldemande", isAuth, isClient, getDemandeClient);
router.post("/:id_chef", isAuth, isClient, addDemande);
router.get("/chef", isAuth, isChef, getDemandeChef);
router.get("/:id_demande", isAuth, isClient, getDemande);
router.get("/accepteddemandechef", isAuth, isChef, getAcceptedDemandeChef);
router.put("/:id_demande", isAuth, isClient, updateDemande);
router.put(
  "/updateStatusToPending/:id_demande",
  isAuth,
  isChef,
  updateStatusToPending
);
router.put(
  "/updateStatusToDone/:id_demande",
  isAuth,
  isChef,
  updateStatusToDone
);

router.delete("/:id_demande", isAuth, isClient, deleteDemande);

module.exports = router;
