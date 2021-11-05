const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: 'Please pick a time!',
        trim: true,
    },
    participants: {
        users: [users]
    }
});


module.exports = scheduleSchema;