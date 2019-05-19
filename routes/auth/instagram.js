const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', passport.authenticate('instagram'));

router.get('/callback',
    passport.authenticate('instagram', {failureRedirect: '/login'}),
    (req, res) => {
        res.redirect('/profile')
})

module.exports = router