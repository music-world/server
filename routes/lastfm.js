var express = require('express');
var router = express.Router();
const Controller = require('../controllers/lastfmController')
const { verifyUser } = require('../middlewares')

router.get('/toptracks', Controller.getTopTracks)
router.get('/toptracks/:location', Controller.getCountryTopTracks)
router.get('/:song', Controller.searchSong)
module.exports = router;
