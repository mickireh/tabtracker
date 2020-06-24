const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan');


const app = express();

// with express 4.16 (this is 4.17) body-parser is again included in express, but both should work
app.use(express.json())
// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'))
app.use(cors())


app.post('/register', (req, res) => {
    res.send({
      // message: `Hello, User was registered`
      message: `Hello ${req.body.email}, User was registered`
    })
})

app.listen(process.env.PORT || 8081, () => {
    console.log(`Server running on PORT 8081`)
})
