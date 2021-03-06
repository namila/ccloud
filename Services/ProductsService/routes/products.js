var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var dynamoDbService = require('../db/dynamoDB');
var elasticsearchService = require('../db/elasticsearch');

/* GET home page. */
router.get('/', function(req, res, next) {
  var params = {
    TableName: "ProductTable"
  };
  dynamoDbService.scan(params, function(error, data){
    if(error){
      res.send({status: 'Failed'});
    }
    else{
      
      var products = [];

      for (var i = 0; i < data.Items.length; ++i ){

          var dataObject = data.Items[i];
          var product = {
            id: dataObject.ProductId.S, 
            name: dataObject.ProductName.S,
            description:dataObject.ProductDescription.S
          };

          products.push(product); 
          
      }
      res.send(products);
    }
  });
});

router.post('/', function(req, res, next){
  var currentTimestamp = new Date().toISOString();
  
  var productObject = {
    TableName: "ProductTable",
    Item:{
      "ProductId": { S: uuid.v1() },
      "ProductName": { S: req.body.productName },
      "ProductDescription": { S: req.body.productDescription },
      "Timestamp": { S: currentTimestamp }
    }
  }

  dynamoDbService.putItem(productObject, function(error, data){
    if(error){
      res.send({status: 'Failed'});
    } else{
      res.send({status: 'Success'});
    }
  });


});

router.get('/search', function(req, res, next){

  elasticsearchService.search({
    index: 'ccloud',
    body:{
      query:{
        query_string:{
          query: "*"+req.query.key+"*",
          fields:['ProductId', 'ProductName', 'ProductDescription']
        }
      },
      highlight:{
        pre_tags: ["<code>"],
        post_tags: ["</code>"],
        fields:{
          ProductId: {},
          ProductName: {},
          ProductDescription: {}
        }
      }
    }

  }).then(function(response){
    res.send({data: response.hits.hits});
  },function(error){
    res.send({data: error});
  });

});

module.exports = router;
