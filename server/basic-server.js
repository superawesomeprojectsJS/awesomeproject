var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8000;


// app.use('/', function(req, res){
//   res.send('hello world');
// })
// console.log(path.join(__dirname,'../index.html'));
app.use(express.static(path.join(__dirname,'../')));

app.listen(PORT);
console.log('listening on 8000...')