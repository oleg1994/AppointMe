const mongoose = require('mongoose');



const AppointmentsSchema = new mongoose.Schema({
    usernameID: {
        type: String,
        required: true
    },
    buisnessesID: {
        type: String,
        required: true
    },
    dateOfAppointment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Appointments', AppointmentsSchema);
