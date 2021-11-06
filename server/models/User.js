const { Schema, SchemaTypes, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
    validate: [/.+@.+\..+/, 'Please enter a valid email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  joinedTeams: [{
    type: SchemaTypes.ObjectId,
    ref: 'Team'
  }],
  userSchedule: [{
    type: SchemaTypes.ObjectId,
    ref: 'Schedule'
  }],
  teamSchedule: [{
    type: SchemaTypes.ObjectId,
    ref: 'Schedule'
  }]
});

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

const User = model('User', userSchema);

module.exports = User;