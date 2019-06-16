const mongoose = require('mongoose');



const BusinessesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    location: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Businesses', BusinessesSchema);
