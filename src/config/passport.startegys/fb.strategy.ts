import passport from 'passport'
import FacebookStrategy from 'passport-facebook'
import {config} from '../../config'
import User, {IUser} from '../../models/user'

import chalk from 'chalk'


passport.serializeUser((user: IUser, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


passport.use(new FacebookStrategy.Strategy({
    clientID: config.passportConfig.clientID,
    clientSecret: config.passportConfig.clientSecret,
    callbackURL: '/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'email', 'name'] 
 },
  (accessToken, refreshToken, profile, done) => {

    User.findOne({facebookId: profile.id})
    .then(currentUser => {
        if (currentUser){
            console.log(chalk.green(JSON.stringify(currentUser)))
        } else {
            new User ({
                facebookId: profile.id,
                username: profile.name?.givenName
            })
            .save()
            .then (newUser => {
                console.log(chalk.red(JSON.stringify(newUser)))
                 done(null, newUser);
            })
        }
    })
  }
));

