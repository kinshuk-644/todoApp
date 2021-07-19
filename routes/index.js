const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const homeController = require("../controllers/home_controller");
const createTodoController = require("../controllers/create_todo_controller");

console.log("router loaded");

router.use(bodyParser.urlencoded({
    extended: true
}));

router.get("/", homeController.home);

router.post("/create-todo", createTodoController.create);

module.exports = router;

