const express = require('express')
const router = express.Router()
const githubRouter = require('./github')
const instagramRouter = require('./instagram')
const facebookRouter = require('./facebook')

router.use('/github', githubRouter);
router.use('/instagram', instagramRouter);
router.use('/facebook', facebookRouter);

module.exports = router