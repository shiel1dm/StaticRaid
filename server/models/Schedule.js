const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
<<<<<<< HEAD
    gameTime: {
        type: String,
        required: 'Please pick a time!',
        trim: true,
    },
});


module.exports = scheduleSchema;
=======

})

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
>>>>>>> login/navbar_component
