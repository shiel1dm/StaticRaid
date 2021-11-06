const { Schema, SchemaTypes, model } = require('mongoose');

const scheduleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: 'Please pick a time!',
        trim: true
    },
    users: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }],
    teams: [{
        type: SchemaTypes.ObjectId,
        ref: 'Team'
    }]
});

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;
