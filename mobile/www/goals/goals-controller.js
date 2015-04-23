angular.module('mpk').controller("GoalsCtrl", ["$scope", "GoalsService",
function($scope, goalsService){
  var that = this;
  goalsService.getAll().success(function(goals){
    that.goals = goals;
  });
}]);
