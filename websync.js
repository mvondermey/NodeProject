//1
var http = require('http');
express = require('express');
//
var fs = require("fs"),
path = require("path");
//
var app = express();
app.set('port', process.env.PORT || 3000);
//
var p = "..\\..";
fs.readdir(p, function (err, files) {
    if (err) {
    	console.log("Error");
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
 //   }).filter(function (file) {
 //       return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s) %d", file, path.extname(file),fs.statSync(file).isFile());
    });
});