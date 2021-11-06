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
    },
    groupCreator: {
        type: String,
        User: this.user
    },    
    }]
});

const Team = model('Team', teamSchema);

module.exports = Team;