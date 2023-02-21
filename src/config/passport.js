const passport = require ("passport");
const LocalStrategy = require ("passport-local").Strategy;

const User = require("../models/users.model")

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
}, async(email, password, done) => {

    // Match Email´s user
    const user = await User.findOne({email})
    if (!user) {
        return done(null, false, { message: "not user found" });
    } else {
        // Match Password´s User
       const match = await User.findOne({password})
       if (match){
            return done (null, user);
       } else {
        return done(null, false, {message: "incorrect password"})
       }
    }
}));

passport.serializeUser((user,done)=> {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});