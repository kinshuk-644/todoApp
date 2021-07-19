const Todo = require("../models/todo");

module.exports.create = function(req,res){

    console.log(req.body.category);
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    } , function(err, newTodo){
        if(err){
            console.log("error in creating a todo");
            return;
        }

        console.log("*******", newTodo);
        return res.redirect("back");
    });
};