import "dotenv/config";
import express from 'express';
// import multer from 'multer';
import { loginController, registerController } from './auth.controller.js';
import passport from "passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import User from "../user/user.model.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "./images/" });

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_JWT,
};

passport.use(
    new Strategy(jwtOptions, function (jwt_payload, cb) {
        User.findOne(
            {
                where: {
                    id: jwt_payload.id,
                },
            })
        .catch(e => {
            return done(err, false);
        })
        .then(user => {
                if (!user) {
                    return cb(null, false);
                }
                return cb(null, user);
            }
        );
    })
);

router.post("/register", upload.single("image"), registerController);
router.post("/login", loginController);
router
    .get(
        "/teste", 
        passport.authenticate("jwt", { session: false }), 
        (req, res) => {
        res.json({ message: 'You are fuck to access this resource' 
    });
});

// router.post("/login", passport.authenticate('local'));
// router.post("/login", (req, res) => {
//     console.log(req.body);
//     res.json("entrou?");
// });

export default router;