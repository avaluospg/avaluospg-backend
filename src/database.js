const mongoose = require("mongoose")

mongoose
    .set("strictQuery", false)
    .connect("mongodb://127.0.0.1:27017/Evaluation")
    .then((db) => console.log("Db connected"))
    .catch((err) => console.error(err));