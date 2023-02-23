require("./database")
const app = require("./app")
const evaluationCtrl = require("./controllers/evaluation.controller");

app.listen(app.get("port"));
app.get('/api/evaluations/:id', evaluationCtrl.getEvaluation);

console.log("server on port", app.get("port"));