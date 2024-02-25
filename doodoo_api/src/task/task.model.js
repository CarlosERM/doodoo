const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("../user/user.model.js");

// 0 - To do,
// 1 - Doing,
// 2 - Completed
const Task = sequelize.define("Task", {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.DATE,
    },
    state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
});

async () => {
    await sequelize.sync();
};

module.exports = Task;
