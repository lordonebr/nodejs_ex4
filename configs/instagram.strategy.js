const passport = require('passport');
const InstagramStrategy = require('passport-instagram').Strategy;

passport.use(new InstagramStrategy({
    clientID: '670faa3a3d954550b3eada894e35b091',
    clientSecret: '00e61a16077f48309ffa2e622b2c5123',
    callbackURL: "http://localhost:3000/auth/instagram/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(undefined, profile);
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});