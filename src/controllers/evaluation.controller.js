const evaluationCtrl = {}

const Evaluation = require("../models/evaluation.model.js")

evaluationCtrl.getEvaluations = async (req, res) => {
    const evaluations = await Evaluation.find()
    res.json(evaluations)
}

evaluationCtrl.createEvaluation = async (req, res) => {
    const newEvaluation = new Evaluation(req.body)
    console.log(newEvaluation)

    await newEvaluation.save()

    res.send({ message: "Evaluation created" })
}

evaluationCtrl.getEvaluation = async (req, res) => {
    console.log(req.params)
    const evaluation = await Evaluation.findById( req.params.id )
    res.send(evaluation)
}

evaluationCtrl.editEvaluation = async (req, res) => {
    await Evaluation.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: "Evaluation Updated" })
}

evaluationCtrl.deleteEvaluation = async (req, res) => {
    await Evaluatione.findByIdAndDelete(req.params.id)
    res.json({status: "Evaluation Delete"})
}



module.exports = evaluationCtrl;