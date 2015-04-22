angular.module('mpk').service("NotesService", ["$http", function($http){
  var NotesService = {
    save: function(note){
      if(note && note.content && note.date){
        return $http.post("/api/notes", note);
      }
    },
    getByDate: function(date){
      if(date){
        return $http.get("/api/notes/"+date);
      }
    }
  }
  return NotesService;
}]);
