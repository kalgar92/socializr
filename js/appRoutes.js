// public/js/appRoutes.js
App.config(function($stateProvider, $urlRouterProvider) {
//
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('deviantart', {
      url: "/deviantart",
      templateUrl: "views/partials/deviantart.html"
    })
    .state('tumblr', {
      url: "/tumblr",
      templateUrl: "views/partials/tumblr.html"
    })
    .state('facebook', {
      url: "/facebook",
      templateUrl: "views/partials/facebook.html"
    })
    .state('github', {
      url: "/github",
      templateUrl: "views/partials/github.html"
    })
    .state('twitch', {
      url: "/twitch",
      templateUrl: "views/partials/twitch.html"
    })
    .state('pinterest', {
      url: "/pinterest",
      templateUrl: "views/partials/pinterest.html"
    })
    .state('grooveshark', {
      url: "/grooveshark",
      templateUrl: "views/partials/grooveshark.html"
    });
});
  