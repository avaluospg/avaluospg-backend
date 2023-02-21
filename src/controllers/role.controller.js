const roleCtrl = {}

const Role = require("../models/role.model.js")

roleCtrl.getRoles = async (req, res) => {
    const roles = await Role.find()
    res.json(roles)
}

roleCtrl.createRole = async (req, res) => {
    const newRole = new Role(req.body)
    console.log(newRole)

    await newRole.save()

    res.send({ message: "Role created" })
}

module.exports = roleCtrl;