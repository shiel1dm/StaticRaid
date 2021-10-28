const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
    gameTime: {
        type: String,
        required: 'Please pick a time!',
        trim: true,
    },
});


module.exports = scheduleSchema;