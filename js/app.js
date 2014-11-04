'use strict';

var App = angular.module('KalgarNet', ['ngRoute', 'ngSanitize']);

App.controller("PinterestCtrl", ['$scope','FeedService', function ($scope,Feed) {    
    Feed.parseFeed("http://www.pinterest.com/kalgar92/feed.rss").success(function(data){
    	
    	var tmp = data.responseData.feed.entries;

    	for(var i = 0; i < tmp.length; i++){

    		 tmp[i].content =  tmp[i].content.replace("/pin", "http://www.pinterest.com/pin");
    	}

    	$scope.feeds = data.responseData.feed.entries;
    });
}]);

/**
*	TBD : 
*	- Créer une popup pour afficher l'image en taille réelle
*/
App.controller("DeviantartCtrl", ['$scope','FeedService', function ($scope,Feed) {    
    Feed.parseFeed("http://backend.deviantart.com/rss.xml?q=gallery%3Akalgar").success(function(data){
    	$scope.feeds = data.responseData.feed.entries;
    });
}]);

/**
*	TBD : 
*	- Retravailler l'interface graphique
*/
App.controller("TumblrCtrl", ['$scope','FeedService', function ($scope,Feed) {    
    Feed.parseFeed("http://iamkalgar.tumblr.com/rss").success(function(data){
    	$scope.feeds = data.responseData.feed.entries;
    });
}]);

/**
*	TBD : 
*	- Retravailler l'interface graphique
*/
App.controller("FacebookCtrl", ['$scope','FeedService', function ($scope,Feed) {    
    Feed.parseFeed("https://www.facebook.com/feeds/page.php?format=rss20&id=286300801524658").success(function(data){
    	$scope.feeds = data.responseData.feed.entries;
    });
}]);

App.controller("GithubCtrl", ['$scope','FeedServiceAtom', function ($scope,Feed) {    
    Feed.parseFeed("https://github.com/kalgar92.atom").success(function(data){
    	$scope.feeds = data.responseData.feed.entries;
    });
}]);

App.controller("TwitchCtrl", ['$scope', function ($scope) {    

	var streams = [{

		title: "TwitchPlaysPokemon",
		description: "I'm a robot playing Pokemon, I don't know what I'm doing, tell me which buttons to press.",
		link: "http://www.twitch.tv/twitchplayspokemon",
		img: "http://static-cdn.jtvnw.net/jtv_user_pictures/twitchplayspokemon-profile_image-1ae8c81713697a02-300x300.png"

	},{

		title: "PhreakStream",
		description: "I'm Phreak and I work on League of Legends",
		link: "http://www.twitch.tv/phreakstream",
		img: "http://static-cdn.jtvnw.net/jtv_user_pictures/phreakstream-profile_image-8625715166f5c80f-300x300.jpeg"

	},{

		title: "MushIsGosu",
		description: "Challenger AD Carry",
		link: "http://www.twitch.tv/mushisgosu",
		img: "http://static-cdn.jtvnw.net/jtv_user_pictures/mushisgosu-profile_image-b1c8bb5fd700025e-300x300.png"

	},{

		title: "Moldran",
		description: "Streaming high quality gameplay with viewer interaction.",
		link: "http://www.twitch.tv/moldran",
		img: "http://static-cdn.jtvnw.net/jtv_user_pictures/moldran-profile_image-287fb7498fe2d9c0-300x300.jpeg"

	},{

		title: "MDStephano",
		description: "Meltdown Stephano Ladder / Tournaments",
		link: "http://www.twitch.tv/mdstephano",
		img: "http://static-cdn.jtvnw.net/jtv_user_pictures/mdstephano-profile_image-71df349df307a196-300x300.png"

	}];


	$scope.streams = streams;

}]);

App.factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);
App.factory('FeedServiceAtom',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&alt=atom-service&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);

App.filter('shortenTitles', function(){

	return function(item){

		if(item.length > 60){
			return item.substring(0,60)+"...";
		} else {
			return item;
		}

	}
});
