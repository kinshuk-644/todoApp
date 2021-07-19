const Todo = require("../models/todo");
const format = require("date-fns/format");

module.exports.create = function(req,res){

    var datee= '';

    if(req.body.dueDate!=""){
        var dueDate = req.body.dueDate;
        var new_date = new Date(parseInt(dueDate.slice(0,4)),parseInt(dueDate.slice(5,7))-1,parseInt(dueDate.slice(8)));
        datee = format(new_date, "MMM dd, yyyy");
    }
    
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: datee
    } , function(err, newTodo){
        if(err){
            console.log("error in creating a todo");
            return;
        }

        console.log("*******", newTodo);
        return res.redirect("back");
    });
};