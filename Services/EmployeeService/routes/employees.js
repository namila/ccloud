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
      
      var employees = [];

      for (var i = 0; i < data.Items.length; ++i ){

          var dataObject = data.Items[i];
          var employee = {
            id: dataObject.EmployeeId.S, 
            name: dataObject.EmployeeName.S,
            address:dataObject.EmployeeAddress.S
          };

          employees.push(employee); 
          
      }
      res.send(employees);
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

router.post('/load',function(req, res, next){
  for(var i=0; i< 100000; ++i){
    for(var y=0; y< 100000; ++y){
      var a = 1+2;
    }
     
  }

  res.send({status: 'done'});

});

module.exports = router;
