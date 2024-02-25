const CustomError = require("./custom_error.js");
const { StatusCodes } = require("http-status-codes");

class Unaunthenticated extends CustomError {
    constructor(message) {
        super(message);
        this.status = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = Unaunthenticated;
