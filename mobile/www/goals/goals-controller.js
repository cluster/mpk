angular.module('mpk').controller("GoalsCtrl", ["$scope", "GoalsService",
function($scope, goalsService){

  var that = this;

  function refreshGoals(){
    goalsService.getAll().success(function(goals){
      that.goals = goals;
    });
  }

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
  	if (toState.name == "app.goals") {
      refreshGoals();
    }
  });

}]);
