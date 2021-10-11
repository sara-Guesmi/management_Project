const Profile = require("../models/Profile");

exports.getAllChef = async (req, res) => {
  try {
    const chefs = await User.find({ role: "chef-projet", verified: true });
    res.send({ msg: "getting succ", chefs });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ id_chef: req.params.id }).populate(
      "id_chef"
    );
    res.status(200).send({ msg: "demande saved successfully", profile });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};
exports.postProfile = async (req, res) => {
  try {
    console.log(req.user._id);

    const { _id } = req.user;
    const newChefProfile = new Profile({
      ...req.body.newProfile,
      id_chef: _id,
    });
    await newChefProfile.save();
    res
      .status(200)
      .send({ msg: "proofile saved succ", id: newChefProfile.id_chef });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "proofile is not saved ", error });
  }
};

// *******************************************
exports.editProfile = async (req, res) => {
  try {
    const { id } = req.user;
    console.log(req.body);

    await Profile.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "proofile edited", id });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "proofile is not edited ", error });
  }
};
