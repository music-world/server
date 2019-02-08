const axios = require('axios');
require('dotenv').config();

class SongController {

  static search(req,res){
    console.log('==============', req.query.search)
    axios
      .get(`https://deezerdevs-deezer.p.mashape.com/search?q=${req.query.search}`,
      {
        headers: {
          "X-Mashape-Key": process.env.X_Mashape_Key
        }
      })
      .then(({data}) => {
        console.log('datanya', data)
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({err: err.message});
      })
  }

  static searchAlbum(req, res){
    axios
      .get(`https://deezerdevs-deezer.p.mashape.com/album/${req.params.album}`,
      {
        headers: {
          "X-Mashape-Key": process.env.X_Mashape_Key
        }
      })
      .then(({data}) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({err: err.message});
      })
  }

  static searchArtist(req, res){
    axios
      .get(`https://deezerdevs-deezer.p.mashape.com/artist/${req.params.artist}`,
      {
        headers: {
          "X-Mashape-Key": process.env.X_Mashape_Key
        }
      })
      .then(({data}) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({err: err.message});
      })
  }

  static searchGenre(req, res){
    axios
      .get(`https://deezerdevs-deezer.p.mashape.com/genre/${req.params.genre}`,
      {
        headers: {
          "X-Mashape-Key": process.env.X_Mashape_Key
        }
      })
      .then(({data}) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({err: err.message});
      })
  }

}

module.exports = SongController;