require("dotenv").config();
const express = require("express");
const { loginController, registerController } = require("./auth.controller.js");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../user/user.model.js");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./images/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: "" });

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

module.exports = router;
