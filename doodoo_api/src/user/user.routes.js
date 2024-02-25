const express = require("express");
const passport = require("passport");
const getUserProfile = require("./user.controller.js");

const router = express.Router();

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    getUserProfile
);

module.exports = router;
