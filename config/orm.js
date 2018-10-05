var connection = require("../config/connection.js");

function questionMark(number) {
    var array = [];

    for (var i = 0; i < number; i++) {
        array.push("?");
    } 

    return array.toString();
}

function sequelObj(ob) {
    var array = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
    return array.toString();
}

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

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMark(vals.length);
        queryString += ") ";
        
        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },


updateOne: function(table, objColVals, cond, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += sequelObj(objColVals);
    queryString += " WHERE ";
    queryString += cond;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};


module.exports = orm;