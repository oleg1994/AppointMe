const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.use(cors());
app.use(bodyParser.json());
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

mongoose.connect('mongodb://localhost/DATABASE', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    access: String,
    time: {
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model('User', UserSchema);

// var insertOne = new User({ username: 'admin', email: 'admin@admin', password: 'admin', access: 'admin'});

// insertOne.save(function (err, insertOne) {
//   if (err) return console.error(err);
// });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get(`/`, (req, res) => {
    res.send('good')

})

app.post('/newUser', (req, res) => { //receiving user info and saving
    User.find({ $or: [{ username: req.body.user }, { email: req.body.email }] }, function (err, result) {
        if (err) {
            console.log(err, 'there is error')
            res.send({err})
        }
        if (result.length) {
            res.send({check:'taken'})

        } else {
            var insertOne = new User({
                username: req.body.user,
                email: req.body.email,
                password: req.body.password,
                access: 'basic',
            });
            insertOne.save(function (err, insertOne) {
                if (err) return console.error(err);
            });
        }

    });
})






app.listen(port, function () {
    console.log('server port', port)
})