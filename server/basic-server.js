var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8000;
var connection = require('./connections.js');

app.use(express.static(path.join(__dirname,"../")));

app.listen(PORT);
console.log('listening on 8000...')