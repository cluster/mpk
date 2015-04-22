var mongoose = require('mongoose');

var Note = mongoose.model('Note', {
  date : String,
  content : String
});
module.exports = Note;
