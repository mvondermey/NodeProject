//1
var http = require('http');
express = require('express');
//
var fs = require("fs"),
path = require("path");
//
var app = express();
app.set('port', process.env.PORT || 80);
//
app.use(express.bodyParser());
//
app.post('/', function(req, res) {
   // print to console
   console.log(req.body);
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
  
