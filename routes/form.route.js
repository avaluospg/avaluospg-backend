module.exports = app => {
    const form = require("../controllers/form.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", form.create);

    // Retrieve all Tutorials
    router.get("/", form.findAll);

    app.use('/api/forms', router);
};