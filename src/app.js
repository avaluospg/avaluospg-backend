const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");


// Initializations
const app= express()
require("./config/passport");
const evaluationCtrl = require("./controllers/evaluation.controller");


// Middlewares
app.use(cors());
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());

// enviroment variables
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/api/employees",require("./routes/employees.routes"));
app.use("/api/users",require("./routes/users.routes"));
app.use("/api/evaluations", require("./routes/evaluation.route"));
app.use("/api/roles", require("./routes/role.route"));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to an Evaluation`s apps"});
});
app.get("/fail", (req, res) => {
    res.json({message: "fail."});
});
app.get('/api/evaluations/:id', evaluationCtrl.getEvaluation);


module.exports = app;