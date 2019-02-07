const { verifyJwt } = require('../helpers')
const User = require('../models/User')

module.exports = {
    verifyUser (req, res, next) {
        if (!req.headers.token) {
            res.status(400).json({
                msg: `Please login first`
            })
        } else {
            try {
                let id = verifyJwt(req.headers.token).id
                User.findById(id)
                    .then(found => {
                        if (!found) {
                            res.status(404).json({
                                msg: `User not found`
                            })
                        } else {
                            req.currentUser = {
                                _id: found._id,
                                name: found.name,
                                email: found.email,
                                image: found.image
                            }
                            next()
                        }
                    })
                    .catch(err =>{
                        res.status(500).json({
                            msg: err.message
                        })
                    })
            } catch (err) {
                res.status(400).json({
                    msg: `Token not valid`
                })
            }
        }
    },
}