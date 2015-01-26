//1
var http = require('http');
express = require('express');
var fs = require("fs"),
FormData = require('form-data');
var request = require('request');
//
path = require("path");
//
var app = express();
app.set('port', process.env.PORT || 80);
//
var p = "..\\..";
fs.readdir(p, function (err, files) {
    if (err) {
    	console.log("Error");
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s) %d", file, path.extname(file),fs.statSync(file).isFile());
        var form = new FormData();
        form.append('file', fs.createReadStream(file));
        console.log("File read");
        //
        //form.submit('http:posttestserver.com/post.php', function(err, res) {
  		// res – response object (http.IncomingMessage)  //
  		//console.log(err);
		// res.resume(); // for node-0.10.x
		//});
        //
        //

//
		//form.pipe(request);
//
		fcallback = function(response) {
			//
		response.on('error', function(err) {
		    // Handle error
		    console.log(err);
		});
//
		response.on('response', function(res) {
		  console.log(res.statusCode);
		  res.resume();
		});
		//
		response.on('data', function(data){
			console.log("Sending");
			console.log(data.toString());
		});
		//
		};
		//
		var req = http.request({
  			method: 'post',
			host: 'localhost',
			port : '80',
			path: '/',
//  			headers: form.getHeaders()
		},fcallback);
	    //form.pipe(request);

	    var readStream = fs.createReadStream(file);
	    //
	    readStream.on('open',function(){
	   	console.log("piping...");
	    readStream.pipe(req);
	    });
	    //
	   	readStream.on('data', function (data) {
 		//console.log(data.toString());
		});
	    //
	    readStream.on('close', function () {
 			 req.end();
		});
	    //
	    console.log("Streamed");
		//
		//fs.createReadStream(file).pipe(request.put('http://posttestserver.com/post.php'));
		//
		console.log("Streamed2");
		//
    });
    //
});