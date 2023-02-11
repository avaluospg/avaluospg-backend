module.exports = app => {
    const roles = require("../controllers/role.controller.js");

    var router = require("express").Router();

    // Create a new Role
    router.post("/", roles.create);

    // Retrieve all roles
    router.get("/", roles.findAll);

    app.use('/api/roles', router);
};