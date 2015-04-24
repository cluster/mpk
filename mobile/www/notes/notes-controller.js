angular.module('mpk').controller("NotesCtrl", ["$scope", "NotesService", function($scope, notesService){
  var that = this;
  this.loadMore = function() {
    for(var i=0; i<20; i++){
      that.notes.push({ date: new Date(that.date) });
      that.date.setDate(that.date.getDate() - 1);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }
  };

  this.notes = [];
  this.date = new Date();
}]);
