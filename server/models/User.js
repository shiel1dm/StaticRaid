const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { Team, Schedule } = require('../models');


const userSchema = new Schema({
<<<<<<< HEAD
    firstName: {
        type: String,
        required: true,
        trim: true
=======
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
>>>>>>> 32b2c5d7ead9bc590b570e64cfb234a460989811
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
   // teams: [Team.schema],
   // schedule: [Schedule.schema]
})

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});
  

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
<<<<<<< HEAD
  
const User = mongoose.model('User', userSchema);
  
=======

const User = model('User', userSchema);

>>>>>>> 32b2c5d7ead9bc590b570e64cfb234a460989811
module.exports = User;