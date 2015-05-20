angular.module('mpk').controller("GoalCtrl", ["$scope", "GoalsService",
"$stateParams", "$state",
function($scope, goalsService, $stateParams, $state){
  var that = this;
  if($stateParams.id && $stateParams.id != "new"){
    goalsService.getById($stateParams.id).then(function(goal){
      that.goal = goal.data;
    });
  }
  this.back = function(){
    goalsService.save(that.goal).then(function(){
      $state.go('app.goals');
    })
  }
}]);
