const mongoose = require('mongoose');

/* Double check if /static raid should be on the end of the localhost or we just use 3001? */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/staticraid', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;