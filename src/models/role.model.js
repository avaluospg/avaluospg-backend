const { Schema, model } = require("mongoose")

const roleSchema = new Schema({
    role: { type: String, require: true },
    active: { type: Boolean }
}, 
{
    timestamps: true,
    versionKey: false
})

module.exports = model("Roles",roleSchema);