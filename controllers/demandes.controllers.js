const Demande = require("../models/Demande");

exports.addDemande = async (req, res) => {
  try {
    const id_client = req.user._id;
    const { id_chef } = req.params;
    const newDemande = new Demande({ ...req.body, id_chef, id_client });
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
exports.getDemande = async (req, res) => {
  try {
    const demande = await Demande.find({
      _id: req.params.id_demande,
    });
    res.status(200).send({ msg: "demande saved successfully", demande });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};

exports.getDemandeChef = async (req, res) => {
  try {
    const demandes = await Demande.find({ id_chef: req.user._id });

    res.status(200).send({ msg: "demande saved successfully", demandes });
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
    });
    res.status(200).send({ msg: "accepted demandes", demandes });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not get this demande", error }] });
  }
};

exports.updateDemande = async (req, res) => {
  try {
    const findDemande = await Demande.findOne({ _id: req.params.id_demande });
    if (findDemande.approved) {
      res.send({ msg: "you can not modify this demande after it is approved" });
    } else {
      await Demande.updateOne(
        { _id: req.params.id_demande },
        { $set: { ...req.body } }
      );
    }
    res.status(200).send({ msg: "demande updated successfully", findDemande });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};

exports.deleteDemande = async (req, res) => {
  try {
    const findDemande = await Demande.findOne({ _id: req.params.id_demande });
    if (findDemande.approved) {
      res.send({ msg: "you can not delete this demande after it is approved" });
    } else {
      await Demande.deleteOne({ _id: req.params.id_demande });
    }
    res.status(200).send({ msg: "demande deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};

exports.updateStatusToPending = async (req, res) => {
  try {
    await Demande.updateOne(
      { _id: req.params.id_demande },
      { $set: { approved: true, status: "pending" } }
    );

    res.status(200).send({ msg: "demande updated successfully" });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not update this demande", error }] });
  }
};
exports.updateStatusToDone = async (req, res) => {
  try {
    await Demande.updateOne(
      { _id: req.params.id_demande },
      { $set: { status: "done" } }
    );

    res.status(200).send({ msg: "demande updated successfully" });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not update this demande", error }] });
  }
};
