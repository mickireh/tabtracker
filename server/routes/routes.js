const AuthenticationController = require('../controllers/AuthenticationController.js')

module.exports = (app) => {

    app.post('/register', 
        AuthenticationController.register)
    

}