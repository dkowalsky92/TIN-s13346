const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const url = require("url");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.get('/hello', function(request,response) {
	response.send('Hello World!');
});

app.get ('/form', function(request, response) {
	response.sendFile(path.join(__dirname + '/form.html'));
});

app.get('/formdata', function(request, response) {
	let query = url.parse(request.url, true).query;

	response.render('../views/formdata.ejs', {
        name: query.name,
        email: query.email,
        message: query.message
    });
});

// todo
app.get('/jsondata', function(request, response) {
	console.log(request.body);
    response.send(request.body);
});

app.listen(8080, function() {
	console.log("Listening at port 8080");
});

