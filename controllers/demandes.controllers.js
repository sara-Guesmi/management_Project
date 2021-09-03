const Demande = require("../models/Demande");

exports.addDemande = async (req, res) => {
  try {
    const newDemande = new Demande({ ...req.body });
    await newDemande.save();
    res.status(200).send({ msg: "demande saved successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};

exports.getDemandeClient = async (req, res) => {
  try {
    const demandes = await Demande.find({ id_client: req.user._id }).populate(
      "id_chef id_client"
    );
    res.status(200).send({ msg: "demande saved successfully", demandes });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};

exports.getDemandeChef = async (req, res) => {
  try {
    const demandes = await Demande.find({ id_chef: req.user._id }).populate(
      "id_chef id_client"
    );
    res
      .status(200)
      .send({ msg: "demande saved successfully", demandes })
      .populate("id_chef id_client");
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};

exports.getAcceptedDemandeChef = async (req, res) => {
  try {
    const demandes = await Demande.find({
      $and: [{ id_chef: req.user._id }, { approved: true }],
    }).populate("id_chef id_client");
    res
      .status(200)
      .send({ msg: "accepted demandes", demandes })
      .populate("id_chef id_client");
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not get this demande", error }] });
  }
};

exports.updateDemande = async (req, res) => {
  try {
    const findDemande = await Demande.getOne({ _id: req.params.id });
    if (findDemande.approved) {
      res.send({ msg: "you can not modify this demande after it is approved" });
    } else {
      await Demande.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
    }
    res
      .status(200)
      .send({ msg: "demande updated successfully", findDemande })
      .populate("id_chef id_client");
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};

exports.deleteDemande = async (req, res) => {
  try {
    const findDemande = await Demande.findOne({ _id: req.params.id });
    console.log(findDemande);
    if (findDemande.approved) {
      res.send({ msg: "you can not delete this demande after it is approved" });
    } else {
      await Demande.deleteOne({ _id: req.params.id });
    }
    res
      .status(200)
      .send({ msg: "demande deleted successfully" })
      .populate("id_chef id_client");
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};
