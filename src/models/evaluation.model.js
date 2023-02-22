const {Schema, model} = require("mongoose");
const evaluationSchema = new Schema({
    number_id: {type: String, required: true},
    date: {type: String, required: true},
    instructedBy: {type: String, required: true},
    requester: {type: String, required: true},
    owners: {type: String, required: true},
    marketableGrade: {type: String, required: true},
    ConditionOfTheProperty: {type: String, required: true},
    change: {type: String, required: true},
    department: {type: String, required: true},
}, {
    timestamps: true,
    versionKey: false,
});

// Add limit and skip properties to the schema
evaluationSchema.statics.paginate = async function (filter, options) {
    const {page = 1, limit = 10} = options;
    const skip = (page - 1) * limit;

    const results = {};
    results.currentPage = page;

    // Get total count of documents
    const totalDocuments = await this.countDocuments(filter);
    results.totalDocuments = totalDocuments;

    // Get total pages
    results.totalPages = Math.ceil(totalDocuments / limit);

    // Get results for current page
    results.results = await this.find(filter)
        .limit(limit)
        .skip(skip)
        .exec();

    return results;
};

module.exports = model("Evaluation", evaluationSchema);

// const { Schema, model } = require("mongoose")
//
// const evaluationSchema = new Schema({
//     number_id: {type: String, require: true},
//     date: {type: String, require: true},
//     instructedBy: {type: String, require: true},
//     requester: {type: String, require: true},
//     owners: {type: String, require: true},
//     marketableGrade: {type: String, require: true},
//     ConditionOfTheProperty: {type: String, require: true},
//     change: {type: String, require: true},
//     department: {type: String, require: true}
// },
// {
//     timestamps: true,
//     versionKey: false
// })
//
// module.exports = model("Evaluation",evaluationSchema);