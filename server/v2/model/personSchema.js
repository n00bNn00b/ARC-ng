const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/database");

class ARC_PERSONS extends Model {}

ARC_PERSONS.init(
  {
    USERID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      generator: function () {
        return uuid();
      },
    },
    FIRST_NAME: {
      type: DataTypes.STRING,
    },
    MIDDLE_NAME: {
      type: DataTypes.STRING,
    },
    LAST_NAME: {
      type: DataTypes.STRING,
    },
    JOB_TITLE: {
      type: DataTypes.STRING,
    },
    LINE_MANAGER_USER_ID: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "ARC_PERSONS",
    timestamps: false,
  }
);

module.exports = ARC_PERSONS;
