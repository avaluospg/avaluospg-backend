const db = require("../models");
const User = db.user;
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');

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
exports.login = (req, res, next) => {
    passport.use(new LocalStrategy(function verify(req,res, cb) {
        var email = req.body.email;
        var password = req.body.password;
        var data = {
            email: email,
            password: password
        }
        User.findOne(data, function(err, user) {
            if (err) { return cb(err); }
            if (!user) {return cb(null,false, {message: "incorrect username or password"});}
            return cb(null, user);
        })
        
      }));
}