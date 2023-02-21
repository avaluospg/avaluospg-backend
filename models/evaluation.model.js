module.exports = mongoose => {
    const Evaluation = mongoose.model(
        "evaluation",
        mongoose.Schema(
            {
                number_id: String,
                date: String,
                instructedBy: String,
                requester: String,
                owners: String,
                marketableGrade: String,
                ConditionOfTheProperty: String,
                change: String,
                department: String,
                active: Boolean
            },
            { timestamps: true }
        )
    );

    return Evaluation
};