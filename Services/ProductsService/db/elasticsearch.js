var elasticsearch = require('elasticsearch');
var elasticsearchClient = new elasticsearch.Client({
    host: process.env.ElasticSearchDomain,
    log: 'error'
});

// var elasticsearchClient = new elasticsearch.Client({
//   host: 'http://localhost:9200',
//   log: 'error'
// });

module.exports = elasticsearchClient;