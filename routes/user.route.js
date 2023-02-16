

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    
    var router = require("express").Router();

    
    router.post("/", users.create);

    
    router.get("/", users.findAll);

    router.post("/signin", users.signin);

    router.get("/logout", users.logout);

    app.use('/api/users', router);
};