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
    users: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    teams: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
