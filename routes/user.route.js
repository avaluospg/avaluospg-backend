const passport = require("passport")

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    
    var router = require("express").Router();

    
    router.post("/", users.create);

    
    router.get("/", users.findAll);

    router.post("/login", passport.authenticate( {successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true }));
        
    app.use('/api/users', router);
};