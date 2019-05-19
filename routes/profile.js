const express = require('express')
const router = express.Router()

router.get('/', 
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        if(req.user.provider.localeCompare('instagram') === 0)
            res.render('profileInstagram', { profile: req.user })
        else
            res.render('profile', { profile: req.user })
    })

module.exports = router