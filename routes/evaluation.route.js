module.exports = app => {
    const evaluations = require("../controllers/evaluation.controller.js");

    var router = require("express").Router();

    // Create a new Evaluation
    router.post("/", evaluations.create);

    // Retrieve all Evaluations
    router.get("/", evaluations.findAll);

    // Get an Evaluation
    router.get("/:id", evaluations.getEvaluation);

    // Edit an Evaluation
    router.put("/:id", evaluations.editEvaluation);

    // Archive an Evaluation
    router.put("/archive/:id", evaluations.archiveEvaluation);

    app.use('/api/evaluations', router);
};