const isChef = (req, res, next) => {
  if (req.user.role == "chef-projet") {
    next();
  } else {
    res.status(401).send({ errors: [{ msg: "you are not authorized chef" }] });
  }
};
module.exports = isChef;
