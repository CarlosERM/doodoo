const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image_path: DataTypes.STRING,
});

(async () => {
    await sequelize.sync();
})();

module.exports = User;
