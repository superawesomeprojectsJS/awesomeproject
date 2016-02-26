var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/awesomeproject');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is connected');
})

// var foodSchema = mongoose.Schema({
//   name:String,
//   waterPerGallon: Number
// })

// var Food = mongoose.model('Food', foodSchema)

// exports.Food = Food;


