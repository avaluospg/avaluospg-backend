const usersCtrl = {};

const passport = require ("passport")

const User = require("../models/users.model.js")

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

usersCtrl.createUser = async (req, res) => {
    const newUser = new User(req.body)
    console.log(newUser)

    await newUser.save()

    res.send({ message: "User created" })
}

usersCtrl.signin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
      req.login(user, function(err) {
        if (err) {
          return next(err);
        }
        // Devuelve una respuesta JSON con la URL de destino
        return res.json({ url: 'http://localhost:8080/#/dashboard' });
      });
    })(req, res, next);
  };



module.exports = usersCtrl;