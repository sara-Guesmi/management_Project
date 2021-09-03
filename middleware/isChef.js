const isChef = (req, res, next) => {
  if (req.user.role == "chef-projet") {
    next();
  } else {
    res.status(401).send({ msg: "you are not authorized" });
  }
};
module.exports = isChef;
