const dbConfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.user = require("./user.model.js")(mongoose);
db.form = require("./evaluation.model.js")(mongoose);
db.role = require("./role.model.js")(mongoose);

module.exports = db;
