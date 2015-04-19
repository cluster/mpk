var mongoose = require('mongoose');

var Note = mongoose.model('Note', {
  date : Date,
  content : String
});
module.exports = Note;
