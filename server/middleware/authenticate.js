const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async function (req, res, next) {
  const token = req.cookies.token || "";

  if (!token) {
    return res.status(401).json({ msg: "No token, authorisation denied" });
  }

  try {
    const decoded = await jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
