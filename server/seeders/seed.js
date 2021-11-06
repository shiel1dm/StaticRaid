const db = require('../config/connection');
const { User, Team } = require('../models');
const userSeeds = require('./userSeeds.json');
const teamSeeds = require('./teamSeeds.json')


db.once('open', async () => {
  try {
   
    await User.deleteMany({});
    await Team.deleteMany({});
    await User.create(userSeeds);
    await User.create(teamSeeds);

  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
