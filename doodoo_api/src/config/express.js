import express from "express";
import authRoutes from "../auth/auth.routes.js";
import userRoutes from "../user/user.routes.js";
import { errorHandler } from "../middlewares/error_handler.js";
import morgan from "morgan";
import "dotenv/config";
import { notFound } from "../middlewares/not_found.js";
import path from "node:path";
import taskRoutes from "../task/task.routes.js";
const __dirname = import.meta.dirname;

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

export default app;