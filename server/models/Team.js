const mongoose = require('mongoose');

const { Schema, model } = mongoose;

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
    gamename: {
        type: String,
        required: true,
        trim: true
    },
    grouptype: {
        type: String,
        enum: ['game, raid, guild, party, server, social'],
       
        trim: true
<<<<<<< HEAD
    }    
<<<<<<< HEAD
>>>>>>> login/navbar_component
=======
>>>>>>> main
=======
    },
    groupCreator: {
        type: String,
        User: this.user
    },    
>>>>>>> main
})

const Team = model('Team', teamSchema);

module.exports = Team;