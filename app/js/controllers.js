'use strict';

/* Controllers */

var agnetaControllers = angular.module('agnetaControllers', []);

agnetaControllers.controller('homeCtrl', 
	['$scope', '$route', function($scope, $route) {
		$scope.$route=$route;
  	}]);
agnetaControllers.controller('materialCtrl', 
	['$scope', '$route', function($scope, $route) {
		$scope.$route=$route;
  	}]);

agnetaControllers.controller('contactCtrl', 
	['$scope', '$route', function($scope, $route) {
		$scope.$route=$route;
  	}]);

agnetaControllers.controller('navCtrl', 
	['$scope', '$location', function($scope, $location) {
		$scope.pages = [
			{path: '/home', title: 'Hem'},
			{path: '/material', title: 'Material'},
			{path: '/contact', title: 'Kontaktuppgifter'}
		];
		$scope.isActive = function(page){
			return page.path == $location.path();
		};
  	}]);