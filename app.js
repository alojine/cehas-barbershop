// Globals variables
require('./globals/Terminal.js');

// Express
const express = require('express');

// Packages
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// Database
const mongoSrv = process.env.MONGO_SRV;
mongoose.connect(mongoSrv, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => terminal.info('[MONGODB] Connection established!'));

// Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));


// Paths
const login = require('./controller/login');
const register = require('./controller/register');

// Routes
app.use('/', login);
app.use('/login', login);
app.use('/register', register);


app.listen(3000);