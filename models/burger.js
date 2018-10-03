var orm = require("../config/orm.js");

var burgers1 = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
};
               



// insertOne: function(cols, vals, )
// updateOne:
//};

module.exports = burgers1;