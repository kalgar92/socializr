// public/js/appRoutes.js
	App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: '/views/home.html'
		})
		.when('/pinterest', {
			templateUrl: '/views/partials/pinterest.html',
			controller: 'PinterestCtrl'
		})
		.when('/deviantart', {
			templateUrl: '/views/partials/deviantart.html',
			controller: 'DeviantartCtrl'
		})
		.when('/tumblr', {
			templateUrl: '/views/partials/tumblr.html',
			controller: 'TumblrCtrl'
		})
		.when('/facebook', {
			templateUrl: '/views/partials/facebook.html',
			controller: 'FacebookCtrl'
		})
		.when('/github', {
			templateUrl: '/views/partials/github.html',
			controller: 'GithubCtrl'
		})
		.when('/grooveshark', {
			templateUrl: '/views/partials/grooveshark.html'
		})
		.when('/twitch', {
			templateUrl: '/views/partials/twitch.html',
			controller: 'TwitchCtrl'
		});

		

	$locationProvider.html5Mode(true);

}]);
