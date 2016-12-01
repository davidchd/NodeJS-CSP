var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var app = express();
app.listen(2048);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use('/api',api);
