module.exports = mongoose => {
    const Role = mongoose.model(
        "role",
        mongoose.Schema(
            {
                role: String,
                active: Boolean
            },
            { timestamps: true }
        )
    );

    return Role;
};