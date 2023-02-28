const {Router} = require("express")
const router = Router()

const evaluationCtrl = require("../controllers/evaluation.controller.js")


router.get("/", evaluationCtrl.getEvaluations);

router.get("/search", evaluationCtrl.getSearchEvaluations);

router.post("/", evaluationCtrl.createEvaluation);

router.get("/number_id/", evaluationCtrl.getEvaluations)

router.get("/:id", evaluationCtrl.getEvaluation);

router.put("/:id", evaluationCtrl.editEvaluation);

router.delete("/:id", evaluationCtrl.deleteEvaluation);

router.put("/:number_id/active", evaluationCtrl.updateEvaluationActive);


module.exports = router;