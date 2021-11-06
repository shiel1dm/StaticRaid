const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const teamSchema = new Schema({

    teamname: {
        type: String,
        required: true,
        trim: true
    },
    gamename: {
        type: String,
        required: true,
        trim: true
    },
    grouptype: {
        type: String,
        enum: ['game, raid, guild, party, server, social'],
        trim: true
    },    
    teamSize: {
        type: Number,
        require: true
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    groupCreator: {
        type: String,
        User: this.user
    },    
});

const Team = model('Team', teamSchema);

module.exports = Team;