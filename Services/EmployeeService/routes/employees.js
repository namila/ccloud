var express = require('express');
var router = express.Router();
var Employee = require('../schemas/employeeSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [
    {
      Name: 'Namila3',
      Age: 28
    }
  ];
  res.send(users);
});

router.post('/', function(req, res, next){
  var employee = new Employee({id: 1, name: 'Namila', address: 'Kelaniya'});
  employee.save();

  var allEmployees = Employee.find(function(error, data){
    res.send(data);
  });
  
});

module.exports = router;
