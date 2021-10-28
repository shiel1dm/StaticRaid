const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({

})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;