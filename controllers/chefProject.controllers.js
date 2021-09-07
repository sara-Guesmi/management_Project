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
    const profile = await Profile.find({ id_chef: req.params.id }).populate(
      "id_chef id_client"
    );
    res.status(200).send({ msg: "demande saved successfully", profile });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ errors: [{ msg: "can not add this demande", error }] });
  }
};
