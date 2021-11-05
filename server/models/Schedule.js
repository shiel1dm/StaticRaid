const mongoose = require('mongoose');
const { User } = require('./User');
const { Team } = require('./Team');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
    gameTime: {
        type: String,
        required: 'Please pick a time!',
        trim: true
    },
    teams: [Team],
    user: [User]
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;