const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require ("../models/user.model.js");

passport.use (new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done)=> {

    //match Email´s user
    const user = await User.findOne({email})
    if (!user) {
        return done(null, false, {message: "not user found"});
    } else {
    // Match password´s User
    const user = await User.findOne({password})
    if(!user) {
        return done(null, user,)
    } else {
        return done(null, false, {message:"Incorrect password"})
    }
    }

}));

passport.serializeUser((user, done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id, (err, user)=> {
        done(err,user);
    })
})