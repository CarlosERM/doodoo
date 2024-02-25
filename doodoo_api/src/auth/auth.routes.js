require("dotenv").config();
const express = require("express");
const { loginController, registerController } = require("./auth.controller.js");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../user/user.model.js");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "./images/" });

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_JWT,
};

passport.use(
    new Strategy(jwtOptions, function (jwt_payload, cb) {
        User.findOne({
            where: {
                id: jwt_payload.id,
            },
        })
            .catch((e) => {
                return done(err, false);
            })
            .then((user) => {
                if (!user) {
                    return cb(null, false);
                }
                return cb(null, user);
            });
    })
);

router.post("/register", upload.single("image"), registerController);
router.post("/login", loginController);
router.get(
    "/teste",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.json({ message: "You are fuck to access this resource" });
    }
);

module.exports = router;
