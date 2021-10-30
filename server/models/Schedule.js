const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({

})

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;