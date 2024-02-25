const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../middlewares/async_wrapper.js");

const getUserProfile = asyncWrapper(async (req, res, next) => {
    const { dataValues: user } = req.user;

    res.status(StatusCodes.OK).json({
        name: user.name,
        image: "http://localhost:3000/" + user.image_path,
    });
});

module.exports = getUserProfile;
