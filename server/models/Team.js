const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({
    teamName: {
        type: String,
        require: true,
        trim: true
    },
    teamSize: {
        type: Number,
        require: true
    }

})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;