const mongoose = require('mongoose');

/* Double check if /static raid should be on the end of the localhost or we just use 3001? */
// having static raid on the end is fine. The examples in our class files have the project name instead of the port.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/staticraid', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;