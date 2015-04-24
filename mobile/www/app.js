angular.module('mpk', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.notes', {
    url: "/notes",
    views: {
      'menuContent': {
        templateUrl: "notes/notes.html",
        controller: 'NotesCtrl as notes'
      }
    }
  })

  .state('app.note', {
    url: "/note/:date",
    views: {
      'menuContent': {
        templateUrl: "notes/note.html",
        controller: 'NoteCtrl as note'
      }
    }
  })

  .state('app.ideas', {
    url: "/ideas",
    views: {
      'menuContent': {
        templateUrl: "ideas/ideas.html",
        controller: 'IdeasCtrl as ideas'
      }
    }
  })
  .state('app.goals', {
    url: "/goals",
    views: {
      'menuContent': {
        templateUrl: "goals/goals.html",
        controller: 'GoalsCtrl as goals'
      }
    }
  })
  .state('app.goal', {
    url: "/goal/:id",
    views: {
      'menuContent': {
        templateUrl: "goals/goal.html",
        controller: 'GoalCtrl as goal'
      }
    }
  })
  .state('app.kanban', {
    url: "/kanban",
    views: {
      'menuContent': {
        templateUrl: "kanban/kanban.html",
        controller: 'KanbanCtrl as kanban'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/notes');
});
