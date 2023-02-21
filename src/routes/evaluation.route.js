const { Router } = require("express")
const router = Router()

const evaluationCtrl = require("../controllers/evaluation.controller.js")


router.get("/", evaluationCtrl.getEvaluations);

router.post("/", evaluationCtrl.createEvaluation);

router.get("/:id", evaluationCtrl.getEvaluation);

router.put("/:id", evaluationCtrl.editEvaluation);

router.delete("/:id", evaluationCtrl.deleteEvaluation);


module.exports = router;