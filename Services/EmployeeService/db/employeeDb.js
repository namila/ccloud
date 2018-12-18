var mongoose = require('mongoose');
module.exports = mongoose.createConnection('mongodb://ccloud-employee-db:27017/employeeDb');
//module.exports = mongoose.createConnection('mongodb://localhost:27017/employeeDb');
