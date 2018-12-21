var express = require('express');
var router = express.Router();
//var Employee = require('../schemas/employeeSchema');
var dynamoDbService = require('../db/dynamodb');

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
  var employeeObject = {
    TableName: "EmployeeTable",
    Item:{
      "EmployeeId": {S: req.body.employeeId},
      "EmployeeName": {S: req.body.employeeName}o,
      "EmployeeAddress": {S: req.body.employeeAddress}
    }
  }
  
  dynamoDbService.putItem(employeeObject, function(error, data){
    if (error){
      res.send({status: 'Failed'});
    }
    else{
      res.send({status: 'Success'});
    }
  });
});

module.exports = router;
