angular.module('mpk').controller("NotesCtrl", ["$scope", "NotesService", function($scope, notesService){
  /*$scope.test = function(){
    notesService.addNote({date:new Date(), content:"titi toto"}).success(function(){alert("cool")}).error(function(){alert("failure")});
  }*/
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
