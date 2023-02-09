const db = require("../models");
const Form = db.form;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nroAv) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a Tutorial
    const form = new Form({
        nroAv: req.body.nroAv,
        FechaDeTasacion: req.body.FechaDeTasacion,
        InstruidoPor: req.body.InstruidoPor,
        Solicitante: req.body.Solicitante,
        Propietarios: req.body.Propietarios,
        GradComerciable: req.body.GradComerciable,
        EstadoInmueble: req.body.EstadoInmueble,
        TipoDeCambio: req.body.TipoDeCambio,
        Departamento: req.body.Departamento,
        published: req.body.published ? req.body.published : false
    });

    // Save Tutorial in the database
    form
        .save(form)
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
    const nroAv = req.query.nroAv;
    let condition = nroAv ? {nroAv: {$regex: new RegExp(nroAv), $options: "i"}} : {};

    Form.find(condition)
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