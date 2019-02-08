const axios = require('axios')
const url = `http://ws.audioscrobbler.com/2.0/`

class lastfmController {
    static getTopTracks (req, res) {
        axios({
            method: 'get',
            url: `${url}?method=chart.gettoptracks&api_key=${process.env.LAST_FM_KEY}&format=json`
        })
        .then( ({ data }) => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json({
                msg: err.response.data
            })
        })
    }

    static getCountryTopTracks (req, res) {
        axios({
            method: 'get',
            url: `${url}/?method=geo.gettoptracks&country=${req.params.location}&api_key=${process.env.LAST_FM_KEY}&format=json`
        })
        .then( ({ data }) => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json({
                msg: err.response.data
            })
        })
    }

    static searchSong (req, res) {
        axios({
            method: 'get',
            url: `${url}/?method=track.search&track=${req.params.song}&api_key=${process.env.LAST_FM_KEY}&format=json`
        })
        .then( resp => {
            res.status(200).json(resp.data.results.trackmatches)
        })
        .catch( err => {
            res.status(500).json({
                msg: err.response
            })
        })
    }

    static getArtistInfo (req, res) {
        axios({
            method: 'get',
            url: `${url}?method=artist.getinfo&artist=${req.params.artist}&api_key=${process.env.LAST_FM_KEY}&format=json`
        })
        .then( ({ data }) => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(500).json({
                msg: err.response
            })
        })
    }
}

module.exports = lastfmController