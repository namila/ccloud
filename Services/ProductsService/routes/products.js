var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = [
    {
      name: "Product1",
      qty: 1
    },
    {
      name: "Product2",
      qty: 2
    }
  ];
  res.send(products);
});

module.exports = router;
