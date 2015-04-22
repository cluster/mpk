angular.module('mpk').controller("NoteCtrl", ["$scope", "NotesService",
"$stateParams", function($scope, notesService, $stateParams){
  var that = this;
  this.date = $stateParams.date;
  if($stateParams.date){
    notesService.getByDate(this.date).then(function(note){
      that.content = note.data.content;
    });
  }
  this.save = function(){
    notesService.save({date: $stateParams.date, content: that.content});
  }
}]);
