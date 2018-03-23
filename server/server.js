const express = require('express');
var app = express();

app.get('/',(req,res)=>{
    //res.status(200).send("Hello World !!");
    res.status(404).send({
        error : "Page Not Found.",
        name : "ToDo page v1.0"
    });
})

var users = [
    {name: "Harshith", age: 23},{name: "Soumya", age: 22},{name: "Keerthika", age: 22}
];
console.log(users);

app.get("/users", (req,res) => {
    res.send(users);
});

app.listen(3000);

module.exports.app = app;