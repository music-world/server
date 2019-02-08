const axios = require('axios')

class LyricController{
    static getLyric(req, res) {
        let key = process.env.MUSIXMATCH_KEY
        let url = `https://api.musixmatch.com/ws/1.1/matcher.track.get?format=json&callback=callback&q_track=${req.query.trackName}&apikey=${process.env.MUSIXMATCH_KEY}`
        // console.log(url)
        axios.get(url)
            .then(({data}) => {
                let musicId = data.message.body.track.track_id
                return axios.get(
                    `https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsons&callback=callback&track_id=${musicId}&apikey=${process.env.MUSIXMATCH_KEY}`
                    )
            })
            .then(({data}) => {
                let lyric = data.message.body.lyrics.lyrics_body
                let lyricReplace = lyric.split('\n').join('<br>')
                res.status(200).json(lyricReplace)
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({status: 'Music Not Found'})
            })
    }
}

module.exports = LyricController