var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
    SALT_WORK_FACTOR = 10;


var UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String,
		required: true
	}

});

UserSchema.pre('save', function (next) {

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        /*I have remember to handle error*/
        bcrypt.hash(user.password, salt, function (err, hash) {
        	/*handle errors*/
            user.password = hash;
            return next();
        });
 
    });
});


