//1
var http = require('http');
express = require('express');

//2

var app = express();
app.set('port', process.env.PORT || 3000);


http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.end('<html><body><h1>Hello World</h1></body></html>');
}).listen(3000);

console.log('Server running on port 3000.');
