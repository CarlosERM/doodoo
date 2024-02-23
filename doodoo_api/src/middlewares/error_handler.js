import { StatusCodes } from "http-status-codes";
import { CustomError } from "../error/custom_error.js";

export const errorHandler = (error, req, res, next) => {
    if( error instanceof CustomError) {
        return res.status(error.status).json({
            msg: error.message,
        })
    }
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: "Something wrong happened",
    })
}