var mongoose = require('mongoose');

var Goal = mongoose.model('Goal', {
  title : String,
  description : String
});
module.exports = Goal;
