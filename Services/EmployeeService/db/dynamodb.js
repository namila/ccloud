var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
var DynamoreDbService = new AWS.DynamoDB({apiVersion:'2012-10-08'});

module.exports = DynamoreDbService;