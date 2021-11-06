const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
    gameTime: {
=======
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
>>>>>>> main
        type: String,
        required: 'Please pick a time!',
        trim: true,
    },
    participants: {
        users: [users]
    }
});


<<<<<<< HEAD
module.exports = scheduleSchema;
=======

})

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
>>>>>>> login/navbar_component
=======
module.exports = scheduleSchema;
>>>>>>> main
