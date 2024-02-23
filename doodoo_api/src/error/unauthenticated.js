import { CustomError } from "./custom_error.js";
import { StatusCodes } from "http-status-codes";

export class Unaunthenticated extends CustomError {
    constructor(message) {
        super(message);
        this.status = StatusCodes.UNAUTHORIZED;
    }
}
