require("dotenv").config();
const sequelize = require("./config/db.js");
const app = require("./config/express.js");

const start_server = async () => {
    try {
        await sequelize.authenticate();
        const PORT = process.env.DOODOO_PORT;
        app.listen(PORT, () => {
            console.log(`Doodoo server is listening to port ${PORT}...`.green);
        });

        console.log("Connection has been established successfully!".green);
    } catch (error) {
        console.error(`Unable to connect to the database: ${error}`.red);
    }
};

start_server();
