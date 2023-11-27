const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/database");

class User extends Model {}

User.init(
  {
    USERID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      generator: function () {
        return uuid();
      },
    },
    USERNAME: {
      type: DataTypes.STRING,
    },
    EMAIL: {
      type: DataTypes.STRING,
    },
    PASSWORD: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  }
);

module.exports = User;
