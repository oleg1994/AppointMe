const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const bcrypt = require('bcryptjs');




//Exports
const User = require('./models/User')
const Businesses = require('./models/Businesses')
const Appointments = require('./models/Appointment')




// App ~uses~
app.use(cors());
app.use(express.json());






// Database connection
mongoose.connect('mongodb://localhost/DATABASE', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});




app.get('/', function (req, res) {
});


// Part of validation and registration
app.post('/newUser', (req, res) => {
    if (!req.body.user || !req.body.email || !req.body.password) {
        res.send({ error: 'Please enter all the fields!' })
    }
    User.find({ $or: [{ username: req.body.user }, { email: req.body.email }] }, function (err, result) {
        if (err) {
            console.log(err, 'there is error')
            res.send({ err })
        }
        if (result.length) {
            console.log(result)
            res.send({ check: 'taken' })

        } else {
            let hashedPassword;
            bcrypt.genSalt(10, (err, salt) => bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                hashedPassword = hash

                let newUser = new User({
                    username: req.body.user,
                    email: req.body.email,
                    password: hashedPassword,
                    access: 'basic',
                });
                newUser.save(function (err, newUser) {
                    if (err) return console.error(err);
                });
                res.send({ success: 'registered' })
            }))
        }
    });
})




app.post('/Login', function (req, res) {
    const { username, password } = req.body;
    User.findOne({ username }, function (err, thefoundUser) {
        if (!thefoundUser) {
            res.send({ logged: false })
        }
        if (err) {
            console.error(err)
        }
        if (thefoundUser !== null) {
            const userID = thefoundUser.id;
            bcrypt.compare(password, thefoundUser.password, function (err, result) {
                if (err) {
                    console.error(err)
                }
                if (result == false) {
                    res.send({ logged: false })
                }
                if (result == true) {
                    res.send({ TheToken: userID, logged: true })
                }
            })
        }
    })
});

app.post('/getuserInfo', function (req, res) {
    const { token } = req.body;
    User.findById(token, '-password').exec(function (err, result) {
        if (err) {
            console.log('error in getuserInfo')
        }
        if (result == undefined) {
            console.log('user not found')
        }
        if (result) {
            const { username } = result
            res.send({ username })
        }
    });
});



app.get('/getBusinesses', function (req, res) {
    Businesses.find({}, { clients: 0, date: 0 }, function (err, result) {
        if (err) {
            console.log('error')
        }
        if (result) {
            res.send(result)
        }
    });
});

app.post('/getOneBusinesses', function (req, res) {
    const { service } = req.body
    Businesses.findById(service, '-clients').exec(function (err, result) {
        if (err) {
            console.log('error')
        }
        if (result) {
            res.send(result)
        }

    });
});

// Inserting into database new appointment from the client, and also inserts it into user collect and buisnesse collection
app.post('/registerAppointment', function (req, res) {
    const { user, buisness, date, time, serviceList } = req.body.appointment
    console.log(req.body.appointment)
    Appointments.find({ $and: [{ buisnessesID: buisness }, { dateOfAppointment: date }, { timeOfAppointment: time }] }, function (err, result) {
        if (err) {
            console.error(err)
        }
        if (result.length) {
            console.log(result, 'that is result')
            const { buisnessesID, dateOfAppointment, timeOfAppointment } = result[0]
            res.send({ occupied: { buisnessesID, dateOfAppointment, timeOfAppointment } })
        } else {
            let newAppointment = new Appointments({
                usernameID: user,
                buisnessesID: buisness,
                dateOfAppointment: date,
                timeOfAppointment: time,
                services: serviceList,
            });
            newAppointment.save(function (err, newAppointment) {
                let biznessID = newAppointment.id
                Businesses.findOneAndUpdate({ _id: buisness }, { $push: { appointments: newAppointment } }, function (error, success) {
                    if (error) {
                        console.log(error);
                    } else {
                        // console.log(success);
                    }
                });
                User.findOneAndUpdate({ _id: user }, { $push: { appointments: biznessID } }, function (error, success) {
                    if (error) {
                        console.log(error);
                    } else {
                        // console.log(success);
                        res.send({ "success": 'appointed' })
                    }
                });
            });
        }
    });

});



app.post('/appointmentInfo', function (req, res) {
    const { token } = req.body
    User.findById(token, function (err, result) {
        if (err) {
            console.error(err)
        }
        Businesses.find({ "appointments.usernameID": token }, function (err, result) {
            res.send(result)
        })
    });

});
app.post('/getAllBusinessesAppointments', function (req, res) {
    const { service } = req.body
    Businesses.findById(service, function (err, result) {
        if (err) {
            console.error(err)
        }
        const dateNtime = []
        const combineTimes = result.appointments.map((jojo, index) => {
            return dateNtime.push({ time: `${jojo.timeOfAppointment}`, date:`${jojo.dateOfAppointment}`})
        })

        Promise.all(combineTimes).then(() => {
            // console.log(dateNtime)
            res.send(dateNtime)
        });
    });

});


// let newBusinesse = new Businesses({
//     name: 'The barber ',
//     location: 'barberz street',
//     appointments: 'xd'
// });
// newBusinesse.save(function (err, newBusinesse) {
//     if (err) return console.error(err);
// });






// let newAppointment = new Appointments({
//     usernameID: '007',
//     buisnessesID: '123456',
//     dateOfAppointment: '2013',
//     timeOfAppointment: '2013',
//     services: 'ass wipe',
// });
// newAppointment.save(function (err, newAppointment) {
//     if (err) return console.error(err);
// });

























app.listen(port, function () {
    console.log('server port', port)
})