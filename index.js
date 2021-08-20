const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

const keys = require('./config/keys')
const taskRoutes = require('./src/routes/task')

// Connect database
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const app = new express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// Routes
app.use(taskRoutes)

app.listen(keys.PORT, () => {
    console.log('Server is on port ' + keys.PORT);
})