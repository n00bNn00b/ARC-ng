const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const credentialSchema = new mongoose.Schema({
  USER_ID: {
    type: Number,
    required: true,
  },
  PASSWORD: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

credentialSchema.pre("save", async function (next) {
  // console.log("password before");
  if (this.isModified("PASSWORD")) {
    this.PASSWORD = await bcrypt.hash(this.PASSWORD, 12);
  }
  next();
});

credentialSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_TOKEN);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Credentials = mongoose.model("ARC_USER_CREDENTIALS", credentialSchema);

module.exports = Credentials;
