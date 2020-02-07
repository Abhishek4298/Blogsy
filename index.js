const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/routes');

const app = express();
const mongoDB = 'mongodb://127.0.0.1/database';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(router);

app.listen(4700,() => {
  console.log("server Running");
});
