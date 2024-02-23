import { CustomError } from "./custom_error.js";
import { StatusCodes } from "http-status-codes";

export class BadRequest extends CustomError {
    constructor(message) {
        super(message);
        this.status = StatusCodes.BAD_REQUEST;
    }
}