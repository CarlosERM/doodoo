require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../middlewares/async_wrapper.js");

const getUserProfile = asyncWrapper(async (req, res, next) => {
    const { dataValues: user } = req.user;

    res.status(StatusCodes.OK).json({
        name: user.name,
        image: `http://localhost:${process.env.DOODOO_PORT}/` + user.image_path,
    });
});

module.exports = getUserProfile;
