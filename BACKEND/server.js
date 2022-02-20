const express = require('express')
const app = express()

// Changed port from 3000 to 2000 so that its not running on the same port as the app
const port = 4000

// Including body parser (Middleware)
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Including cors (Cross Origin Resource Sharing - for Security)
const cors = require('cors')

// Using cors
app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// Configuration for sending build and static files for deployment
const path = require('path')
app.use(express.static(path.join(__dirname, '../build')))
app.use('/static', express.static(path.join(__dirname, 'build//static')))

// Including Mongoosejs package
const mongoose = require('mongoose')

// Set up connection string for database
const mongoConnection = 'mongodb+srv://admin:0000@cluster0.cbk0q.mongodb.net/stallion?retryWrites=true&w=majority'
mongoose.connect(mongoConnection, { useNewUrlParser: true })


// Server app listening on port 4000
app.listen(port, () => {
    console.log('Listening at http://localhost:4000')
})