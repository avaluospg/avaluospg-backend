const db = require("../models");
const User = db.user;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.email) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a Tutorial
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        published: req.body.published ? req.body.published : false
    });

    // Save Tutorial in the database
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

// Retrieve all Tutorials from the database.
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