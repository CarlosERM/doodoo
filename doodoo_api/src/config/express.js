const morgan = require("morgan");
const path = require("node:path");
const express = require("express");
require("dotenv").config();

const authRoutes = require("../auth/auth.routes");
const userRoutes = require("../user/user.routes");
const taskRoutes = require("../task/task.routes");
const errorHandler = require("../middlewares/error_handler");
const notFound = require("../middlewares/not_found");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../../images")));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", userRoutes);
app.use("/api/v1/task", taskRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
