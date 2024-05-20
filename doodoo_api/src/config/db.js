require("colors");
require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "doodoo-db",
    "postgres",
    process.env.DB_PASSWORD,
    {
        host: "doodoo-db",
        dialect: "postgres",
    }
);

module.exports = sequelize;
