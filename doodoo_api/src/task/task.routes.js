import express from "express";
import passport from "passport";
import { addTask } from "./task.controller.js";

const router = express.Router();

router.post(
    "/", 
    passport.authenticate('jwt', { session: false }), 
    addTask)

export default router;