const db = require("../models");
const User = db.user;
const passport = require("passport")

// Create and Save a new Users
exports.create = (req, res) => {
    // Validate request
    if (!req.body.email) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a Users
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        active: req.body.active ? req.body.active : false
    });

    // Save Users in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    let condition = email ? {email: {$regex: new RegExp(email), $options: "i"}} : {};

    User.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};
exports.signin = passport.authenticate("local", {
    failureRedirect: "/api/users/logout",
    successRedirect: "/"
})
exports.logout = (req,res)=>{
    res.send("logout")
}