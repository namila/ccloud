var mongoose = require('mongoose');
var dbConnection = require('../db/employeeDb');
mongoose.connection = dbConnection;

var employeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String
})

module.exports = mongoose.model('Employee', employeeSchema);