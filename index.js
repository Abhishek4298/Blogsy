const express = require('express');
const mongoose = require('mongoose');
let ejs = require('ejs');
const path = require('path')

const app = express();

const router = require('./routes/routes');

const mongoDB = 'mongodb://127.0.0.1/database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(router);

app.listen(4500,() => {
  console.log("server Running");
});
