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
    appointments: {
        type: Array,
    },
    avatar: {
        type: String,
    },
    access: {
        type: String,
    },
    business: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('User', UserSchema);
