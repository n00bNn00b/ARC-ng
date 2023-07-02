const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Credentials = require("../model/credentialSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt;
    console.log(token, "token");
    const verifyToken = jwt.verify(token, process.env.SECRET_TOKEN);
    console.log(verifyToken);

    const rootUser = await Credentials.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not Found!");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized Access!" });
    console.log("errors: authenticate: ", error);
  }
};

module.exports = Authenticate;
