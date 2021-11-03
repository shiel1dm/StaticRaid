const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({
<<<<<<< HEAD
<<<<<<< HEAD
    teamName: {
        type: String,
        require: true,
        trim: true
    },
    teamSize: {
        type: Number,
        require: true
    }

=======
=======
>>>>>>> main
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
    }    
<<<<<<< HEAD
>>>>>>> login/navbar_component
=======
>>>>>>> main
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;