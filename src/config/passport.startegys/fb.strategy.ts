import passport from 'passport'
import FacebookStrategy from 'passport-facebook'
import {config} from '../../config'
import User, {IUser} from '../../models/user'



passport.serializeUser((user: IUser, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // User.findById(id).then((user) => {
        done(null, id);
    // });
});


// passport.use(
//     new FaceBookAuthStartegy.Strategy({
//         clientID: config.passportConfig.clientID,
//         clientSecret: config.passportConfig.clientSecret,
//         callbackURL: config.passportConfig.callbackURL

//     }, (accessToken, refreshToken, profile, done) => {
        
//         User.findOne({facebookId: profile.id}).then((currentUser) => {
//             if(currentUser){
//                 console.log('user is: ', currentUser);
//                 done(null, currentUser);
//             } else {
//                 new User({
//                     facebookId: profile.id,
//                     username: profile.displayName,
//                     thumbnail: profile._json.image.url
//                 }).save().then((newUser) => {
//                     console.log('created new user: ', newUser);
//                     done(null, newUser);
//                 });
//             }
//         });
//     })
// );

passport.use(new FacebookStrategy.Strategy({
    clientID: config.passportConfig.clientID,
    clientSecret: config.passportConfig.clientSecret,
    callbackURL: "http://localhost:5000/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email'] 
 },
  (accessToken, refreshToken, profile, cb) => {
   console.log(accessToken, refreshToken, profile, cb)
  }
));