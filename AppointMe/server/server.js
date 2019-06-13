const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');












//Exports
const User = require('./models/User')
// const auth = require('./Auth')



// App ~uses~
app.use(cors());
app.use(express.json());
// const jwtSecret = 'SecretJwt'





// Database connection
mongoose.connect('mongodb://localhost/DATABASE', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});




app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
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

app.post('/checkifLogged', function (req, res) {
    const { loginToken } = req.body;
    if (loginToken == null){
        console.log(loginToken, 'in if null')
        res.send({ connected: 'false' })
    }
    if (loginToken == true) {
        console.log(loginToken, 'in if true')
        res.send({ connected:'true'})
    }
});

























app.listen(port, function () {
    console.log('server port', port)
})