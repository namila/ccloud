console.log('Function loaded');
exports.handler = async (event, context, callback) => {
  
  event.Records.forEach((record) => {
    console.log(JSON.stringify(record));
    
    }
  );
};