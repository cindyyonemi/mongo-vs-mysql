var express = require('express');
var app = express();
var db = require('./config/db');
var cors = require('cors');

app.disable('x-powered-by');

app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Config API */
app.use('/api/v1/clients', require('./modules/client/routes'));

/* Hello API */
app.get("/api", function(req, resp) {
	resp.send("Hello Mongo VS MySql!");
});

module.exports = app;