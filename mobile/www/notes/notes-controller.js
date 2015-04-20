angular.module('mpk').controller("NotesCtrl", ["$scope", "NotesService", function($scope, notesService){
  $scope.test = function(){
    notesService.addNote({date:new Date(), content:"titi toto"}).success(function(){alert("cool")}).error(function(){alert("failure")});
  }
}]);
