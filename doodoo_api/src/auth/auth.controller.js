import bcrypt from "bcryptjs";
import "dotenv/config";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { BadRequest } from "../error/bad_request.js";
import { asyncWrapper } from "../middlewares/async_wrapper.js";
import User from "../user/user.model.js";

export const registerController = asyncWrapper(async (req, res, next) => {
    const saltRounds = 10;
    const { email, name, password } = req.body;
    const { path } = req.file;
    
    const userFound = await User.findOne({
        where: {
            email: email,
        }
    });

    if (userFound) {
        throw new BadRequest(`${email} is already registered in the system!`);
    }

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hashedPassword) {
            if (err) {
                throw new Error();
            }
            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                image_path: path,
            });

            if (!user) {
                console.log(user);
                throw new BadRequest(
                    "It was not possible to register your account, try valid values."
                );
            }
            const id = user.id;
            const token = await jwt.sign(
                { id },
                process.env.SECRET_JWT,
                { expiresIn: "1h" }
            );

            res.status(StatusCodes.CREATED).json({
                token,
            });
        })
    });
});

export const loginController = asyncWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        where: {
            email: email,
        },
    });

    if (!user) {
        throw new BadRequest("Wrong email or password.");
    }

    bcrypt.compare(password, user.password, async function (err, ress) {
        if (err) {
            throw new Error();
        }

        if (!ress) {
            throw new BadRequest(`Wrong email or password.`);
        }

        const id = user.id;
        const token = await jwt.sign({ id }, process.env.SECRET_JWT, {
            expiresIn: "1h",
        });

        res.status(StatusCodes.ACCEPTED).json({
            token,
        });
    });
});



