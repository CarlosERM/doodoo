const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) => {
    res.status(StatusCodes.NOT_FOUND).send("This route doesn't exist.");
};

module.exports = notFound;
