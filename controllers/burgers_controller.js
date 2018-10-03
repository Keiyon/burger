var express = require("express");
var router = express.Router();

var burgerMod = require("../models/burger.js");


router.get("/", function(req, res) {
    burgerMod.selectAll(function(data) {
        var numObject = {
            burgers: data
        };
        console.log(numObject);
        res.render("index", numObject);
    });
});

module.exports = router;

//controller file communicates between serer and database. The medium between client side and database

// since we already have the seeds.sql with data, we don't need a post route