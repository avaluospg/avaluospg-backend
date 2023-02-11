module.exports = app => {
    const evaluation = require("../controllers/evaluation.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", evaluation.create);

    // Retrieve all Tutorials
    router.get("/", evaluation.findAll);

    app.use('/api/evaluation', router);
};