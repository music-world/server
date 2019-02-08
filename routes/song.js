const router = require('express').Router();
const SongController = require('../controllers/songController.js');

router.get('/', SongController.search);
router.get('/album/:album', SongController.searchAlbum);
router.get('/artist/:artist', SongController.searchArtist);
router.get('/genre/:genre', SongController.searchGenre);

module.exports = router;