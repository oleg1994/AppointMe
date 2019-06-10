
const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const path = require('path');
const passport = require('passport')
const passportJWT = require('passport-jwt')
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY
}



passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    console.log(jwt_payload)
    User.findOne({ username: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            console.log(user)
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));




app.use(express.static(path.join(__dirname, '../public')));


//Exports
const User = require('./models/User')



// App ~uses~
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
// passport.use(strategy)
app.use(passport.initialize())




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

                let insertOne = new User({
                    username: req.body.user,
                    email: req.body.email,
                    password: hashedPassword,
                    access: 'basic',
                });
                insertOne.save(function (err, insertOne) {
                    if (err) return console.error(err);
                });

                console.log(hashedPassword, 'hashed passs')
                res.send({ success: 'registered' })
            }))
        }
    });
})




app.post('/Login', function (req, res) {
    console.log(req.body)
    const { username, password } = req.body;
    User.findOne({ username }, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .send({ error: 'Internal error please try again' })
        } else if (!user) {
            res.status(401).send({ error: 'Incorrect username or password' })
        } else {
            user.isCorrectPassword(password, function (err, same) {
                if (err) {
                    res.status(500)
                        .send({ error: 'Internal error please try again' })
                } else if (!same) {
                    res.status(401)
                        .send({ error: 'Incorrect username or password' })
                } else {
                    // Issue token
                    console.log('should do')
                    const payload = { username };
                    const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
                    res.send({token})
                }
            });
        }
    });
});



app.get('/checkToken', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log('kookok')
    console.log(req.headers)
    res.send(req.username)
});






















app.listen(port, function () {
    console.log('server port', port)
})