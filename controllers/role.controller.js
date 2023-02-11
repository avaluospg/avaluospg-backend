const db = require("../models");
const Role = db.role;

// Create and Save a new Role
exports.create = (req, res) => {
    // Validate request
    if (!req.body.role) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a Role
    const role = new Role({
        role: req.body.role,
        active: req.body.active ? req.body.active : false
    });

    // Save Role in the database
    role
        .save(role)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the role."
            });
        });
};

// Retrieve all Role from the database.
exports.findAll = (req, res) => {
    const role = req.query.role;
    let condition = role ? {role: {$regex: new RegExp(role), $options: "i"}} : {};

    Role.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Roles."
            });
        });
};