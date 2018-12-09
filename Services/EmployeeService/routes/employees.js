var express = require('express');
var router = express.Router();

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

module.exports = router;
