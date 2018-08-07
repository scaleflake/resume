/* jshint esversion: 6*/

var express = require('express');
var app = express();

// app.use('/', express.static(__dirname + '/'));

function sendEn(req, res) {
	console.log('EN');
	res.sendFile(__dirname + '/index.html');
}

['/resume', '/resume-en', '/resume_en'].forEach(e => {
	app.use(e, express.static(__dirname + '/'));
	app.get(e, sendEn);
});

function sendRu(req, res) { 
	console.log('RU');
        res.sendFile(__dirname + '/index-ru.html');
}

['/resume-ru', '/resume_ru'].forEach(e => {
	app.use(e, express.static(__dirname + '/'));
	app.get(e, sendRu);
});

app.listen(18000);
console.log('Server started');
