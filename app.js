// Constants
const express = require('express');

const fs = require('fs');

const path = require('path');

const app = express();

// Database
const mongoose = require('mongoose');

// Routes
const login = require('./controller/login');
const register = require('./controller/register');

// const mongoSrv = process.env.MONG_SRV;

// Database
// mongoose.connect(mongoSrv, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => terminal.info('[MONGODB] Connection established!'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// midleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));

// middleware routes
app.use('/', login);
app.use('/login', login);
app.use('/register', register);



app.listen(3000);