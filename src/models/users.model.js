const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    email: {type: String, require: true},
    password: {type: String, require: true},
    name: {type: String, require: true},
    active: {type: Boolean, default: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model("User",userSchema);