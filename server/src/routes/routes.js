module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      // message: `Hello, User was registered`
      message: `Hello ${req.body.email}, User was registered`
    })
  })
}
