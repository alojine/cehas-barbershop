const express = require('express');

const fs = require('fs');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// midleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));

// default path
app.get('/', (req, res) =>{
    res.render('login');
});

// register
app.get('/register', (req, res) =>{
    res.render('register');
});

// login
app.get('/login', (req, res) =>{
    res.render('login');
});

app.listen(3000);