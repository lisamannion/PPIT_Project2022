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

// create model for database for interaction
var LoginRegModel = mongoose.model("users", loginRegSchema)

// post request to create new user
app.post('/register', (req, res) => {

    LoginRegModel.findOne({email:req.body.email}, (err, data) => {
        if(data){
            res.send("User already exist");
            console.log("User exist");
        } else {
            // interact to create
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

    LoginRegModel.findOne({email:req.body.logEmail}, (err, data) => {
        if(data){
            if(req.body.logPassword === data.password) {
                res.send({message: "Login success"});
                console.log("Successful login");
            } else {
                res.send({message:"Wrong credentials"});
                console.log("Unsucessful login");
            }
        } else {
            // server to client to prevent duplicate creation
            res.send('Not registered');
            console.log("Unregistered");
        }
    })
})

// Server app listening on port 4000
app.listen(port, () => {
    console.log('Listening at http://localhost:4000')
})