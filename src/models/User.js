const mongoose = require('mongoose')
const crypto = require('crypto');
const jwt = require('jsonwebtoken')

const keys = require('../../config/keys')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
      type: String,
      required: true,
  },
  hashcode: {
      type: String,
      default: crypto.randomBytes(20).toString('hex'),
  }
});

UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ key: this.name + '-' + this.hashcode }, keys.jwtKey)
  return token
}

UserSchema.statics.findByToken = async function (token) {
  if (!token) {
    throw new Error('Unable to login')
  }
  const data = jwt.verify(token, keys.jwtKey)
  const [ name, hashcode ] = data.key.split('-')
  
  const user = await User.find({ name: name, hashcode: hashcode })
  if (!user) {
    throw new Error('Unable to login')
  }
  return user
}

const User = mongoose.model('User', UserSchema)

module.exports = User