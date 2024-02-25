const express = require("express");
const passport = require("passport");
const {
    addTask,
    getAllTasks,
    removeTask,
    updateTask,
} = require("./task.controller.js");

const router = express.Router();

router.post("/", passport.authenticate("jwt", { session: false }), addTask);

router.get("/", passport.authenticate("jwt", { session: false }), getAllTasks);

router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    removeTask
);

router.patch(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    updateTask
);

module.exports = router;
