var mongodb = require('mongodb');
var grid = require('gridfs-stream');
var fs = require('fs');
var uri = "mongodb://yourcustomconnectionstring";

console.log(process.argv[2]);
inputfile = process.argv[2];i

mongodb.MongoClient.connect(uri, function(err, db) {
  
  if(err) throw err;

  var gfs = grid(db, mongodb);

  var source = fs.createReadStream(inputfile);

  var target = gfs.createWriteStream({
       filename: inputfile
  });

  source.pipe(target);
  
  target.on('close', function (file) {
    // do something with `file`
    console.log('Finished uploading file ' + file.filename);
    process.exit(0);
  });

// Closing MongoClient
});

