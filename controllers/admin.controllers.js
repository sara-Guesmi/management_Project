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
