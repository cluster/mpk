angular.module('mpk').service("GoalsService", ["$http", function($http){
  var NotesService = {
    save: function(goal){
      if(goal && goal.title && goal.description){
        return $http.post("/api/goals", goal);
      }
    },
    getAll: function(){
      return $http.get("/api/goals");
    },
    getById: function(id){
      if(id){
        return $http.get("/api/goals/"+id);
      }
    }
  }
  return NotesService;
}]);
