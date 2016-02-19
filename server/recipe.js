var mongoose = require('mongoose');
var RecipeSchema = new mongoose.schema({image: String, url: String});

var Recipe = mongoose.model('Recipe', RecipeSchema)

