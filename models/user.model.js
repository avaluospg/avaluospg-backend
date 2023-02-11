module.exports = mongoose => {
  const Users = mongoose.model(
      "users",
      mongoose.Schema(
          {
              email: String,
              username: String,
              password: String,
              role: String,
              active: Boolean
          },
          { timestamps: true }
      )
  );

  return Users;
};