const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home")
});

app.get("/about", function(req, res){
    res.render("about")
});

app.get("/programs", function(req, res){
    res.render("programs")
});

app.get("/contact", function(req, res){
    res.render("contact")
});

app.get("/reviews", function(req, res){
    res.render("reviews")
});

app.get("/faq-page", function(req, res){
    res.render("faq-page")
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});