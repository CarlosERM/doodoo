const CustomError = require("./custom_error.js");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomError {
    constructor(message) {
        super(message);
        this.status = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;
