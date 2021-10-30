const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({
    teamname: {
        type: String,
        required: true,
        trim: true
    },
    grouptype: {
        type: String,
        enum: ['game, raid, guild, party, server, social'],
        required: true,
        trim: true
    },    
    teamSize: {
        type: Number,
        require: true
    }

})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;