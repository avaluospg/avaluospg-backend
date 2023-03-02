const evaluationCtrl = {}

const Evaluation = require("../models/evaluation.model.js")

evaluationCtrl.getEvaluations = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    console.log("pageSize", req.query.limit);
    const skip = (page - 1) * limit;

    const totalRecords = await Evaluation.countDocuments();
    const totalPages = Math.ceil(totalRecords / limit);
    const evaluations = await Evaluation.find({active: {$eq: true}}).skip(skip).limit(limit).exec();

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

    res.send({message: "Evaluation created"})
}

evaluationCtrl.getEvaluation = async (req, res) => {
    console.log(req.params)
    const evaluation = await Evaluation.findById(req.params.number_id)
    res.send(evaluation)
}

evaluationCtrl.getSearchEvaluations = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const searchData = req.query.searchData;
    const active = req.query.activeItem;
    const totalRecords = await Evaluation.countDocuments();
    const totalPages = Math.ceil(totalRecords / limit);
    const evaluations = await Evaluation.find({
        active: {$eq: active},
        $or: [{number_id: {$eq: searchData}},
            {requester: {$regex: new RegExp(searchData, "i")}}]
    }).skip(skip).limit(limit).exec();
    res.json({
        evaluations,
        totalRecords,
        currentPage: page,
        totalPages
    });
}

evaluationCtrl.updateEvaluationActive = async (req, res) => {
    const extra = await Evaluation.findById(req.body.number_id)
    const active = await Evaluation.findById(req.params.active)
    const evaluation = await Evaluation.findByIdAndUpdate(req.params.number_id, {active: req.body.active}, {new: true});
    res.json({status: "Evaluation archived", evaluation, "number_id:": extra, "active": active});
}

evaluationCtrl.editEvaluation = async (req, res) => {
    try {
        await Evaluation.findByIdAndUpdate(req.params.number_id, req.body);
        res.json({ status: "Evaluation Updated" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating evaluation" });
    }
};


evaluationCtrl.getEvaluation = async (req, res) => {
    const evaluation = await Evaluation.findOne({number_id: req.params.id});
    if (!evaluation) {
        return res.status(404).json({message: "Evaluation not found"});
    }
    res.json(evaluation);
}

evaluationCtrl.deleteEvaluation = async (req, res) => {
    await Evaluation.findByIdAndDelete(req.params.number_id)
    res.json({status: "Evaluation Delete"})
}

module.exports = evaluationCtrl;
