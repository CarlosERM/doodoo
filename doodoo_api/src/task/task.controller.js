const { StatusCodes } = require("http-status-codes");
const Task = require("./task.model.js");
const NotFound = require("../error/not_found.js");
const asyncWrapper = require("../middlewares/async_wrapper.js");

const addTask = asyncWrapper(async (req, res) => {
    const { dataValues: user } = req.user;
    const { title, description, date } = req.body;

    const task = await Task.create({
        user_id: user.id,
        title: title,
        description: description,
        date: date,
    });

    res.status(StatusCodes.CREATED).json({
        msg: `Task ${task.title} created successfully!`,
    });
});

const getAllTasks = asyncWrapper(async (req, res) => {
    const { dataValues: user } = req.user;
    const tasks = await Task.findAll({
        where: {
            user_id: user.id,
        },
        raw: true,
    });

    res.status(StatusCodes.OK).json({
        tasks: tasks,
    });
});

const removeTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;

    const removedTask = await Task.destroy({
        where: {
            id: taskId,
        },
    });

    if (!removedTask) {
        throw new NotFound("Task was not deleted!");
    }
    res.status(StatusCodes.ACCEPTED).json({
        msg: "The task was deleted successfully!",
    });
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const { title, description, date } = req.body;

    const task = await Task.update(
        {
            title,
            description,
            date,
        },
        {
            where: {
                id: taskId,
            },
        }
    );

    if (!task[0]) {
        throw new NotFound("Task was not updated!");
    }

    res.status(StatusCodes.OK).json({
        msg: "Task updated sucessfully!",
    });
});

module.exports = {
    addTask,
    getAllTasks,
    removeTask,
    updateTask,
};
