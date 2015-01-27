//1
var http = require('http');
express = require('express');
//
http.globalAgent.maxSockets = 100;
//https.globalAgent.maxSockets = 100;

var fs = require("fs"),
Path = require("path");
//
var app = express();
app.set('port', process.env.PORT || 80);
//
app.use(express.bodyParser());
//
app.post('/*', function(req, res) {
   // print to console
   console.log(req.url);
   //
          fs.mkdir("files", function(err) {
//
    });
    //
   var fileName = "files\\" + req.url.replace(/\//g, "");
   //
   //
   var fileStream = fs.createWriteStream(fileName.toString()); 
   //
   req.pipe(fileStream);
   //
  req.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString());
    });
   //
    req.on('end', function(chunk) {
      fileStream.end();
    }); 
   //
   //res.emit('end');
   //res.write('<html><body><h1>Hello World</h1></body></html>');
} );
//
app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});
// 
//
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  });
  
