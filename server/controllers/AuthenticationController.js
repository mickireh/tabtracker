const {User} = require('../models')
const db = require('../models')

module.exports = {

    // register (req, res) {
    //     res.send({
    //       message: `Hello ${req.body.email}, User was registered`
    //     })
    // }

    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send(JSON.stringify(err))
        }
    }

    // async register (req, res) {
    //     try {
    //         const user = await User.create({
    //             email: req.body.email,
    //             password: req.body.password    
    //         })
    //         res.send(user.toJSON())
    //     } catch (err) {
    //         res.status(400).send({
    //             error: 'This email account is already in use.'
    //         })
    //     }
    // }
    
    // async register (req, res) {
    //     try {
    //         const user = await db.User.create(req.body)
    //         res.send(user.toJSON())
    //     } catch (err) {
    //         res.status(400).send({
    //             error: 'This email account is already in use.'
    //         })
    //     }
    // }

}
