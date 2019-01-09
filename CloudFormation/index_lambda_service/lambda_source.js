var elasticsearch = require('elasticsearch');
var elasticsearchClient = new elasticsearch.Client({
    host: process.env.ElasticSearchDomain,
    log: 'error'
});

exports.handler = async (event, context) => {
  
  for(var i=0; i < event.Records.length; ++i){
    
    var record = event.Records[i];
    var newImage = record.dynamodb.NewImage;

    if(record.eventName == "INSERT"){
      var indexer = await elasticsearchClient.create({
        index: 'CCloud',
        type:'Product',
        id: newImage.ProductId.S,
        body: {
          ProductId: newImage.ProductId.S,
          ProductName: newImage.ProductName.S,
          ProductDescription: newImage.ProductDescription.S
        }
      });

      console.log("Indexed!");
      console.log(indexer);
    }
  }
  return `Successfully processed ${event.Records.length} records.`;
};