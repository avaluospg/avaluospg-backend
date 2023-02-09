module.exports = mongoose => {
    const User = mongoose.model(
        "users",
        mongoose.Schema(
            {
                email: String,
                password: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return User;
};
