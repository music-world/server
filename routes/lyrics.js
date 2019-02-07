const express = require('express');
const router = express.Router();
const LyricController = require('../controllers/lyric-controller')

router.get('/', LyricController.getLyric)

module.exports = router