const express = require('express');
const mongoose = require('mongoose');
const body = require('body-parser');
let ejs = require('ejs');
const path = require('path')
let cookieParser = require('cookie-parser'); 


const app = express();

const router = require('./routes/routes');

const mongoDB = 'mongodb://127.0.0.1/database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded(
{
  extended : false
}));
app.use(router);

app.listen(9000,() => {
  console.log("server Running");
});