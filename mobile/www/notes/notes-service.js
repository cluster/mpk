angular.module('mpk').service("NotesService", ["$http", function($http){
  var NotesService = {
    addNote: function(note){
      if(note && note.content && note.date){
        return $http.post("/api/notes", note);
      }
    }
  }
  return NotesService;
}]);
