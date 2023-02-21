const { Schema, model } = require("mongoose")

const evaluationSchema = new Schema({
    id: {type: String, require: true},
    date: {type: String, require: true},
    instructedBy: {type: String, require: true},
    requester: {type: String, require: true},
    owners: {type: String, require: true},
    marketableGrade: {type: String, require: true},
    ConditionOfTheProperty: {type: String, require: true},
    change: {type: String, require: true},
    department: {type: String, require: true}
}, 
{
    timestamps: true,
    versionKey: false
})

module.exports = model("Evaluation",evaluationSchema);