const { StatusCodes } = require("http-status-codes");
const CustomError = require("../error/custom_error.js");

const errorHandler = (error, req, res, next) => {
    if (error instanceof CustomError) {
        return res.status(error.status).json({
            msg: error.message,
        });
    }
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: "Something wrong happened",
    });
};

module.exports = errorHandler;
