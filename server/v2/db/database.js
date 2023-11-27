const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();

const PG_USERNAME = process.env.PG_USERNAME;
const PG_PASSWORD = process.env.PG_PASSWORD;
const PG_URL = process.env.PG_URL;
const PG_PORT = process.env.PG_PORT;
const PG_DB_NAME = process.env.PG_DB_NAME;

const connection = async () => {
  const sequelize = new Sequelize(PG_DB_NAME, PG_USERNAME, PG_PASSWORD, {
    host: PG_URL,
    port: PG_PORT,
    dialect: "postgres",
    schema: "test",
  });
  let User = null;
  try {
    await sequelize.authenticate();
    console.log("Connection to postgresDB has been established successfully!");
  } catch (error) {
    console.log("Unable to connect postgres db: ", error);
  }
};

module.exports = connection;
