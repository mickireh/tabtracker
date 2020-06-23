console.log('hello');
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express();
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `Hello, User was registered`
        // message: `Hello ${res.body.email} User was registered`
    })
})

app.listen(process.env.PORT || 8081)