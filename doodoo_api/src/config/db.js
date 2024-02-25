require("colors");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("doodoo-db", "postgres", "asshole", {
    host: "doodoo-db",
    dialect: "postgres",
});

module.exports = sequelize;
