const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    access: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var user = this;


UserSchema.methods.isCorrectPassword = function (possiblePassword, callback) {
    bcrypt.compare(possiblePassword, this.password, function (err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
}


module.exports = mongoose.model('User', UserSchema);
