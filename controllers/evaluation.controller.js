const db = require("../models");
const Evaluation = db.evaluations;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a Tutorial
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

    // Save Tutorial in the database
    evaluation
        .save(evaluation)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
    let condition = id ? {id: {$regex: new RegExp(id), $options: "i"}} : {};

    Evaluation.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.getEvaluation = async (req, res) => {
    const evaluation = await Evaluation.findById(req.params.id)
    res.json({evaluation})
};

exports.editEvaluation = async(req, res) => {
    await Evaluation.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: "Evaluation updated"})
};

exports.archiveEvaluation = (req, res) => {

};

