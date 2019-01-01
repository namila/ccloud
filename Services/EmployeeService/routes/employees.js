var express = require('express');
var router = express.Router();
var uuid = require('uuid');
//var Employee = require('../schemas/employeeSchema');
var dynamoDbService = require('../db/dynamodb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var params ={
    TableName:"EmployeeTable"
  }

  dynamoDbService.scan(params, function(error, data){
    if(error){
      res.send({status: 'Failed'});
    }
    else{
      res.send(data);
    }
  });
});

router.post('/', function(req, res, next){
  var employeeObject = {
    TableName: "EmployeeTable",
    Item:{
      "EmployeeId": {S: uuid.v1()},
      "EmployeeName": {S: req.body.employeeName},
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
