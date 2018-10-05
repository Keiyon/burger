var orm = require("../config/orm.js");

var burgers1 = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

insertOne: function(cols, vals, cb) {
  orm.create("burger1", cols, vals, function(res) {
     cb(res);
});
},

updateOne: function(objColVals, cond, cb) {

    orm.updateOne("burger1", objColVals, cond, function(res) {
        cb(res);
    });
} 
};

module.exports = burgers1;