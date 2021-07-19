const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const homeController = require("../controllers/home_controller");
const createTodoController = require("../controllers/create_todo_controller");
const changeTodoStatus = require("../controllers/change_todo_status_controller");
const deleteTodos = require("../controllers/delete_todos_controller");

router.use(bodyParser.urlencoded({
    extended: true
}));

router.get("/", homeController.home);

router.post("/create-todo", createTodoController.create);

router.get("/change-todo-status", changeTodoStatus.status);

router.get("/delete-todos", deleteTodos.delete);

module.exports = router;

