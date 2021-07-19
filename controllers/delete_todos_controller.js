const Todo = require("../models/todo");

module.exports.delete = function(req,res){
    Todo.deleteMany({isChecked: true}, function(err, deletedTodo){
        if(err){
            console.log("Error deleting todo");
            return;
        }

        console.log(deletedTodo);
        return res.redirect("back");
    });
};