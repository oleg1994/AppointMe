const mongoose = require('mongoose');



const BusinessesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    services: {
        type: Array,
    },
    appointments: {
        type: Array,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Businesses', BusinessesSchema);
