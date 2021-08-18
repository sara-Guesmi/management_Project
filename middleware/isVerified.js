const User = require("../models/User");

const isVerified = async (req, res, next) => {
  try {
    const { email } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser.verified) {
      next();
    } else {
      res.status(400).send({
        errors: [
          {
            msg: "your account is not verified yet please contact the admin",
          },
        ],
      });
    }
  } catch (error) {
    res.status(400).send({ msg: "a problem accured sorry" });
  }
};

module.exports = isVerified;
