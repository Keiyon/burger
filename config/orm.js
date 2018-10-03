var connection = require("../config/connection.js");






var orm = {

    selectAll: function (table, cb) {
        var queryStr = "SELECT * FROM " + table + ";";
        connection.query(queryStr, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(queryStr);
            console.log(result);
            cb(result);
        });
    },

    // insertOne: function(table, cols, vals, cb) {
    //     var query = "INSERT INTO " + table;
    //     queryString += " (";
    //     queryString += cols.toString();
    //     queryString += ") ";
    //     queryString += "VALUES (";
    //     queryString += questionMark(vals.length);
    //     queryString += ") ";

    //     console.log(queryString);

    //     connection.query(queryString, vals, function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
            
    //         cb(result);
    //     });
    // },

    // updateOne: function (table, )
}










module.exports = orm;