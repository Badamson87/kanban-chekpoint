var mongoose = require('mongoose')
var connectionString = "mongodb://student2:student2@ds016298.mlab.com:16298/cardboard-checkpoint"
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})