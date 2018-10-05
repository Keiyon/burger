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

router.post("/api/burgers", function(req, res) {
    burgerMod.insertOne([
        "burger_name", "devoured"

    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:iid", function(req, res) {
    var con = "id = " + req.params.id;

    console.log("con", con);

    burgerMod.updateOne ({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;

//controller file communicates between server and database. The medium between client side and database

// since we already have the seeds.sql with data, we don't need a post route