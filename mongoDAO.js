const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = ' '
const colName = ' '

// Gabriel - Database set up
//var lectDB
//var lect

// Connect to the database
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then((client) => {
//         // Setting up the database in lectDB
//         lectDB = client.db(dbName)
//         // Setting up the collection variable
//         lect = lectDB.collection(colName)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// Functions here.....

// Exports - functions can be elsewhere in the project
module.exports = { getLecturers, addLecturer }