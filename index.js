const express = require("express");

const db = require("./config/mongoose");
const Todo = require("./models/todo");

const app = express();

const port = 3000;

// use express router
app.use("/", require("./routes"));

// use ejs as view engine 
app.set("view engine","ejs");
app.set("views","./views");

app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
})