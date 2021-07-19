const Todo = require("../models/todo");

module.exports.status = function(req,res){
    var ischecked= false;
    var id = req.query.id;

    Todo.findById(id , function(err, todo){
        if(err){
            console.log("Error finding todo");
            return;
        }

        ischecked = todo.isChecked;

        if(ischecked){
            Todo.findByIdAndUpdate(id, {isChecked: false}, function(err, updated_todo){
                if(err){
                    console.log("Error updating todo");
                    return;
                }

                return res.redirect("back");
            });
        }
    
        else{
            Todo.findByIdAndUpdate(id, {isChecked: true}, function(err, updated_todo){
                if(err){
                    console.log("Error updating todo");
                    return;
                }

                return res.redirect("back");
            });
        }
   
    });
};