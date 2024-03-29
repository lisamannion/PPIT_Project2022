const { generateToken } = require('../BACKEND/generateToken')
const { validateToken } = require('../BACKEND/validateToken')
const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')

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
    price: { type: Number, required: true },
    contactName: String,
    contactEmail: String
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
            res.send("User already exist")
        } else { // If email is unique
            try {
                // Encrypt the password for storage in database
                const encryptedPassword = bcrypt.hashSync(req.body.password, 10)

                // If the email doesn't already exist in the database allow creation of new user
                LoginRegModel.create({
                    firstName: req.body.firstName,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: encryptedPassword
                })
            } catch (error) {
                console.log(error)
            }

            // server to client to prevent duplicate creation
            res.send('User Added');
        }
    })
})

// post request to login
app.post('/login', (req, res) => {
    // Find the email in the database
    LoginRegModel.findOne({ email: req.body.logEmail }, (err, data) => {
        // If the user's email is found in the database
        if (data) {
            const isPasswordValid = bcrypt.compareSync(req.body.logPassword, data.password)
            // If the provided password matches that record's password
            if (isPasswordValid) {
                // Generate JWT token - send to the user
                res.json({
                    token: generateToken(data)
                })
            } else { // Otherwise the user is not logged in
                res.send({ message: "Wrong credentials" });
            }
        } else { // If the email is not in the database then the user is not registered
            res.send('Not registered');
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
        price: req.body.price,
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail
    })

    // server to client to prevent duplicate creation
    res.send('Horse Added');
})

// get request from /horses and response with json
app.get('/horses', (req, res) => {
    // find doc in database
    HorseModel.find((err, data) => {
        res.json(data);
    })
})

// Listen for a get request and will return horse which has the id specified after /update/:id
app.get('/horses/:id', (req, res) => {
    HorseModel.findById(req.params.id, (err, data) => {
        // Sending back the data
        res.status(200).json(data)
    })
})

app.get('/userHorses/:email', (req, res) => {
    HorseModel.find({ contactEmail: req.params.email }, (err, data) => {
        // Sending back the data
        res.status(200).json(data)
    })
})

app.post('/validate', (req, res) => {
    const token = req.body.token

    try {
        // Sends back the user information (decoded payload) if the signature hasn't been tampered with
        res.json(validateToken(token))
    } catch (error) {
        console.log(error)
    }
})

// update horse with specific id
app.put('/editHorse/:id', (req, res) => {

    // find product with that id and update from database
    HorseModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data)
        })
})

// listen from http (/api/products/:id) that has delete method
app.delete('/deleteHorse/:id', (req, res) => {

    // delete record with that specific id (id associated with delete button)
    HorseModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        })
})

// Server app listening on port 4000
app.listen(port, () => {
    console.log('Listening at http://localhost:4000')
})