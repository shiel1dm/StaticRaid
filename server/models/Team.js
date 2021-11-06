const { Schema, SchemaTypes, model } = require('mongoose');

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
        type: String,
        require: true
    },
    teamSchedule: [{
        type: SchemaTypes.ObjectId,
        ref: 'Schedule'
    }],
    groupCreator: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    },
    users: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }]
});

const Team = model('Team', teamSchema);

module.exports = Team;