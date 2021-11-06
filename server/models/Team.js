const { Schema, SchemaTypes, model } = require('mongoose');

const teamSchema = new Schema({
    teamName: {
        type: String,
        require: true,
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
    teamSchedule: [{
        type: SchemaTypes.ObjectId,
        ref: 'Schedule'
      }],
    users: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }]
});

const Team = model('Team', teamSchema);

module.exports = Team;