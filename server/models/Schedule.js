const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
    gameTime: {
        type: String,
        required: 'Please pick a time!',
        trim: true,
    },
    teams: [Team.schema],
    user: [User.schema]
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;