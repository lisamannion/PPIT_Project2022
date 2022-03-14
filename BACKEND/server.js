const { generateToken } = require('../BACKEND/generateToken')
const express = require('express')
const app = express()

// Changed port from 3000 to 4000 so that its not running on the same port as the app
const port = 4000

// Set EJS as templating engine
app.set('view engine', 'ejs');

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
const mongoConnection = 'mongodb+srv://ppit:gabriellisa@cluster0.wa6ae.mongodb.net/ppit?retryWrites=true&w=majority'
mongoose.connect(mongoConnection, { useNewUrlParser: true })

// schema for database
const Schema = mongoose.Schema;

var loginRegSchema = new Schema({
    firstName: String,
    surname: String,
    email: String,
    password: String
});

var horseSchema = new Schema({
    adName: { type: String, required: true },
    age: Number,
    height: Number,
    gender: String,
    breed: String,
    discipline: String,
    image: String,
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

// create model for database for interaction
var LoginRegModel = mongoose.model("users", loginRegSchema)
var HorseModel = mongoose.model("horse", horseSchema)

// post request to create new user
app.post('/register', (req, res) => {
    // Querying the database
    LoginRegModel.findOne({ email: req.body.email }, (err, data) => {
        // If email has been found in the database, the user already exists
        if (data) {
            res.send("User already exist");
            console.log("User exists");
        } else {
            // If the email doesn't already exist in the database allow creation of new user
            LoginRegModel.create({
                firstName: req.body.firstName,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password
            })

            // server to client to prevent duplicate creation
            res.send('User Added');
            console.log('Create successful');
        }
    })
})

// post request to login
app.post('/login', (req, res) => {
    // Find the email in the database
    LoginRegModel.findOne({ email: req.body.logEmail }, (err, data) => {
        // If the user's email is found in the database
        if (data) {
            // If the provided password matches that record's password
            if (req.body.logPassword === data.password) {
                // Generate JWT token - send to the user
                res.json({
                    firstName: loginRegSchema.firstName,
                    token: generateToken(loginRegSchema._id)
                })
                console.log("Successful login");
            } else { // Otherwise the user is not logged in
                res.send({ message: "Wrong credentials" });
                console.log("Unsucessful login");
            }
        } else { // If the email is not in the database then the user is not registered
            res.send('Not registered');
            console.log("Unregistered");
        }
    })
})

// post request to create new horse ad
app.post('/addHorse', (req, res) => {

    HorseModel.create({
        adName: req.body.adName,
        age: req.body.age,
        height: req.body.height,
        gender: req.body.gender,
        breed: req.body.breed,
        discipline: req.body.discipline,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price
    })

    // server to client to prevent duplicate creation
    res.send('Horse Added');
    console.log('Horse added successful');

})

// Server app listening on port 4000
app.listen(port, () => {
    console.log('Listening at http://localhost:4000')
})