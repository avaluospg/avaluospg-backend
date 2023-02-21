const { Router } = require("express");
const router = Router();

const usersCtrl = require("../controllers/users.controller")

router.get("/", usersCtrl.getUsers);

router.post("/", usersCtrl.createUser);

router.post("/signin", usersCtrl.signin);



module.exports = router;