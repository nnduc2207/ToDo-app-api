const express = require('express')
const mongoose = require('mongoose');

const keys = require('./config/keys')

// Connect database
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const app = new express()

app.listen(keys.PORT, () => {
    console.log('Server is on port ' + keys.PORT);
})