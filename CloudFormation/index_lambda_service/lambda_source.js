console.log('Function loaded');
exports.handler = async (event, context) => {
  
  event.Records.forEach((record) => {
    console.log(JSON.stringify(record));
  });
}