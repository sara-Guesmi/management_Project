const User = require("../models/User");

exports.ChangeStatus = async (req, res) => {
  try {
    //   get user id clicked
    const { id } = req.params;
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: { verified: true },
      }
    );
    res.status(200).send({ msg: "user updated succefully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not change the user" }] });
  }
};
exports.BannUser = async (req, res) => {
  try {
    //   get user id clicked
    const { id } = req.params;
    const findUser = await User.findOne({ _id: id });
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: { banned: !findUser.banned },
      }
    );
    res.status(200).send({ msg: "user banned succefully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not bann the user" }] });
  }
};

exports.getAllChef = async (req, res) => {
  try {
    const chefs = await User.find({ role: "chef-projet" });
    res.send({ msg: "getting succ", chefs });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.deleteOne({ _id: id });
    res.status(200).send({ msg: "deleting  succ" });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not delete the currentUser" }] });
  }
};
exports.AllClient = async (req, res) => {
  try {
    const clients = await User.find({ role: "client" });
    res.send({ msg: "getting succ", clients });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};
