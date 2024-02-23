import express from "express";
import passport from "passport";
import { getUserProfile } from "./user.controller.js";

const router = express.Router();

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    getUserProfile
);


export default router;