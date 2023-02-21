const { Router } = require("express")
const router = Router()

const roleCtrl = require("../controllers/role.controller.js")


router.get("/", roleCtrl.getRoles);

router.post("/", roleCtrl.createRole);


module.exports = router;