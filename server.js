/* jshint esversion: 6*/

var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));

['/resume', '/resume/en', '/resume-en', '/resume_en'].forEach(e => {
	app.get(e, (req, res) => {
		res.sendFile(__dirname + '/index.html');
	});
});

['/resume/ru', '/resume-ru', '/resume_ru'].forEach(e => {
	app.get(e, (req, res) => {
		res.sendFile(__dirname + '/index-ru.html');
	});
});

app.listen(18000);
console.log('Server started');