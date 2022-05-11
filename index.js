const express = require('express');
const app     = express();
const cors    = require('cors');
var dal       = require('./dal.js');

// use to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// first route - create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
   dal.create(req.params.name,req.params.email,req.params.password).
    then((user) => {
        console.log(user);
        res.send(user);
    });
});

// second route - login user
app.get('/account/login/:name/:email/:password', function (req, res) {
    res.send({
        email:    req.params.string,
        password: req.params.password
    });
});

// third route - all accounts
app.get('/account/all', function (req, res) {
    
    dal.all(). 
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

// deposit route
app.get('/account/deposit/:amount/:name/:email/:password', function (req, res) {
    res.send({
        amount: req.params.amount,
        email:    req.params.string,
        password: req.params.password
    });
});

// withdraw route
app.get('/account/withdraw/:amount/:name/:email/:password/', function (req, res) {
    res.send({
        amount:   req.params.amount,
        email:    req.params.string,
        password: req.params.password,
        
    });
});

// balance route
app.get('/account/balance/:balance/:name/:email/:password', function (req, res) {
    res.send({
        balance:  req.params.balance,
        name:     req.params.name,
        email:    req.params.string,
        password: req.params.password,
        
    });
});

// start listener
var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);