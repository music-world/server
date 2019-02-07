const router = require('express').Router();
const SongController = require('../controllers/songController.js');

router.get('/:search', SongController.search);
router.get('/album/:album', SongController.searchAlbum);
router.get('/artist/:artist', SongController.searchArtist);
router.get('/genre/:genre', SongController.searchGenre);

module.exports = router;