import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../middlewares/async_wrapper.js";
import Task from "./task.model.js";
import User from "../user/user.model.js";

export const addTask = asyncWrapper( async (req, res) => {
    const {dataValues: user} = req.user;
    const {title, description, date} = req.body;

    const task = await Task.create({
        user_id: user.id,
        title: title,
        description: description,
        date: date,
    });

    res.status(StatusCodes.CREATED).json({
        msg: `Task ${task.title} created successfully!`
    })
});