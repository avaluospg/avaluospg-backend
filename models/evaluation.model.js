module.exports = mongoose => {
    const Evaluation = mongoose.model(
        "evaluation",
        mongoose.Schema(
            {
                id: String,
                date: String, 
                instructedBy: String,
                requester: String,
                owners: String,
                marketableGrade: String,
                ConditionOfTheProperty: String,
                change: String,
                department: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Evaluation;
};