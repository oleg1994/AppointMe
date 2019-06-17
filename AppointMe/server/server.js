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
                    res.send({ TheToken: userID,logged:true })
                }
            })
        }
    })
});

app.post('/getuserInfo', function (req, res) {
    const { token } = req.body;
    User.findById(token, '-password').exec(function (err, result) {
        if(err){
            console.log('error in getuserInfo')
        }
        if(result == undefined){
            console.log('user not found')
        }
        if(result){
            const {username} = result
            res.send({username})
        }
    });  
});
app.post('/getbusinessInfo', function (req, res) {
    const { idk } = req.body;
//     Businesses.findById(id, function (err, result) {
// console.log(result)
     });



   
    app.get('/getBusinesses', function (req, res) {
        Businesses.find({}, { clients: 0, date: 0 }, function (err, result) {
           if(err){
               console.log('error')
           }
            if (result){
                res.send(result)
           }
        });
});
app.post('/getOneBusinesses', function (req, res) {
    const {service} = req.body
    Businesses.findById(service, '-clients').exec(function (err, result) {
            if (err) {
                console.log('error')
            }
            if (result) {
                res.send(result)
            }
       
        });  
});






let newBusinesse = new Businesses({
    name: 'The barbers ',
    location: 'at barbers place',
    clients: 'hashedPassword',
});
newBusinesse.save(function (err, newBusinesse) {
    if (err) return console.error(err);
});






let newAppointment = new Appointments({
    usernameID: 'userID',
    buisnessesID: 'buisnessesID',
    dateOfAppointment: 'SELECTEDTIME',
});
newAppointment.save(function (err, newAppointment) {
    if (err) return console.error(err);
});

























app.listen(port, function () {
    console.log('server port', port)
})