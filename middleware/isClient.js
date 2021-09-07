const isClient = (req, res, next) => {
  if (req.user.role == "client") {
    next();
  } else {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};
module.exports = isClient;
