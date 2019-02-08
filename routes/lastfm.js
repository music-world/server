var express = require('express');
var router = express.Router();
const Controller = require('../controllers/lastfmController')
const { verifyUser } = require('../middlewares')

router.get('/toptracks', Controller.getTopTracks)
router.get('/toptracks/:location', Controller.getCountryTopTracks)
router.get('/:song/search', Controller.searchSong)
router.get('/:artist', Controller.getArtistInfo)
module.exports = router;
