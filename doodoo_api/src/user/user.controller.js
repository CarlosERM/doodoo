import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../middlewares/async_wrapper.js";

export const getUserProfile = asyncWrapper(async (req, res, next) => {
    const { dataValues: user } = req.user;

    res.status(StatusCodes.OK).json({
        name: user.name,
        image: "http://localhost:3000/" + user.image_path,
    });
    
});