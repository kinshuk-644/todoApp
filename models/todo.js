const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    
    category: {
        type: String
    },

    dueDate: {
        type: String
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;