angular.module('mpk').controller("GoalCtrl", ["$scope", "GoalsService",
"$stateParams", function($scope, goalsService, $stateParams){
  var that = this;
  if($stateParams.id){
    goalsService.getById($stateParams.id).then(function(goal){
      that.goal = goal.data;
    });
  }
  this.save = function(){
    goalsService.save(that.goal);
  }
}]);
