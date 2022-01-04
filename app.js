var express = require("express");
var bodyParser = require("body-parser");
const { Router } = require("express");
var  mongoose = require("mongoose");
require('dotenv').config();

var app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/style"));
app.use(express.static(__dirname + "/image"));
app.use(express.static(__dirname + "/javascript"));
app.use(express.static(__dirname + "/SVG"));

mongoose.connect("mongodb://localhost/gifted_hands");
mongoose.Promise = Promise;

app.get("/", function(req, res){
    res.redirect("/home")
})

app.get("/home", function(req, res){
    res.render("index.ejs")
})

app.get("/abt", function(req, res){
    res.render("about.ejs")
})

app.get("/contact", function(req, res){
    res.render("contact.ejs")
})

app.get("/work", function(req, res){
    res.render("work.ejs")
})

app.get("*", function(req, res){
    res.render("404.ejs")
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});