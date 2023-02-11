const db = require("../models");
const Evaluation = db.evaluation;

// Create and Save a new evaluation
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nroAv) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a evaluation
    const evaluation = new Evaluation({
        id: req.body.id,
        date: req.body.date,
        instructedBy: req.body.instructedBy,
        requester: req.body.requester,
        owners: req.body.owners,
        marketableGrade: req.body.marketableGrade,
        ConditionOfTheProperty: req.body.ConditionOfTheProperty,
        change: req.body.change,
        department: req.body.department,
        published: req.body.published ? req.body.published : false
    });

    // Save evaluation in the database
    evaluation
        .save(evaluation)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the evaluation."
            });
        });
};

// Retrieve all evaluations from the database.
exports.findAll = (req, res) => {
    const nroAv = req.query.nroAv;
    let condition = nroAv ? {nroAv: {$regex: new RegExp(nroAv), $options: "i"}} : {};

    Evaluation.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving evaluations."
            });
        });
};