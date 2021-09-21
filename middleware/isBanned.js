const User = require("../models/User");

const isBanned = async (req, res, next) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser.banned) {
      next();
    } else {
      res.status(400).send({
        errors: [
          {
            msg: "your account is Banned yet please contact the admin",
          },
        ],
      });
    }
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
  }
};

module.exports = isBanned;
