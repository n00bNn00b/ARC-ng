const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Credentials = require("../model/credentialSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt;
    // const an = req.headers.Authorization;
    // console.log("authorization: ", an);
    console.log("token : ", token);
    const verifyToken = jwt.verify(token, process.env.SECRET_TOKEN);
    console.log("verify: ", verifyToken);

    const rootUser = await Credentials.findOne({
      USER_ID: verifyToken.USER_ID,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not Found!");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser.USER_ID; //_id
    console.log("root_user: ", rootUser.USER_ID);

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized Access!" });
    console.log("errors: authenticate: ", error);
  }
};

module.exports = Authenticate;
