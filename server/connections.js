var mongoose = require('mongoose');
var DBurl = 'mongodb://localhost:27017/awesomeproject';

mongoose.connect(DBurl);
mongoose.connection.on('connected', function() {
  console.log('mongoose is connected to', DBurl);
});

mongoose.connection.on('error', function(error) {
  console.log('mongoose error ', error);
});

mongoose.connection.on('disconnected', function() {
  console.log('mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('mongoose disconnected through app termination');
    process.exit(0);
  })
})