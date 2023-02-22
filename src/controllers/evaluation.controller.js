const evaluationCtrl = {}

const Evaluation = require("../models/evaluation.model.js")

evaluationCtrl.getEvaluations = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    console.log("pageSize", req.query.limit);// Cambiar el nombre del parámetro a "limit"
    const skip = (page - 1) * limit;

    const totalRecords = await Evaluation.countDocuments();
    const totalPages = Math.ceil(totalRecords / limit);
    const evaluations = await Evaluation.find().skip(skip).limit(limit).exec();

    res.json({
        evaluations,
        totalRecords,
        currentPage: page,
        totalPages
    });
}


evaluationCtrl.createEvaluation = async (req, res) => {
    const newEvaluation = new Evaluation(req.body)
    console.log(newEvaluation)

    await newEvaluation.save()

    res.send({ message: "Evaluation created" })
}

evaluationCtrl.getEvaluation = async (req, res) => {
    console.log(req.params)
    const evaluation = await Evaluation.findById( req.params.number_id )
    res.send(evaluation)
}

evaluationCtrl.editEvaluation = async (req, res) => {
    await Evaluation.findByIdAndUpdate(req.params.number_id, req.body)
    res.json({ status: "Evaluation Updated" })
}

evaluationCtrl.deleteEvaluation = async (req, res) => {
    await Evaluation.findByIdAndDelete(req.params.number_id)
    res.json({status: "Evaluation Delete"})
}

module.exports = evaluationCtrl;
