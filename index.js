const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const path = require('path')
const keys = require('./config/keys')
const taskRoutes = require('./src/routes/task')
const userRoutes = require('./src/routes/user')

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
app.use(userRoutes)

app.listen(keys.PORT, () => {
    console.log('Server is on port ' + keys.PORT);
})