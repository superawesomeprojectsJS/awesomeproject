var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;


// app.use('/', function(req, res){
//   res.send('hello world');
// })

app.listen(PORT);
console.log('listening on 8000...')