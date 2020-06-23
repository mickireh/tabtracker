module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  // app.post('/register', (req, res) => {
  //   res.send({
  //     // message: `Hello, User was registered`
  //     message: `Hello ${req.body.email}, User was registered`
  //   })
  // })

  app.post('/register', users.create)
  
}
