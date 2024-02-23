import Sequelize from 'sequelize'
import 'colors'

export const sequelize = new Sequelize("doodoo-db", "postgres", "PASSWORD", {
    host: "doodoo-db",
    dialect: "postgres",
});
