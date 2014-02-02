'use strict';


// Declare app level module which depends on filters, and services
var agneta = angular.module('agneta', [
  'ngRoute',
  'agneta.filters',
  'agneta.services',
  'agneta.directives',
  'agnetaControllers'
]);

agneta.config(['$routeProvider', 
	function($routeProvider) {
  $routeProvider.
  	when('/home', {
  		templateUrl: 'templates/home.html', 
  		controller: 'homeCtrl',
  		activeTab: 'home'
  	}).
  	when('/material', {
  		templateUrl: 'templates/material.html', 
  		controller: 'materialCtrl',
  		activeTab: 'material'
  	}).
  	when('/contact', {
  		templateUrl: 'templates/contact.html', 
  		controller: 'contactCtrl',
  		activeTab: 'contact'
  	}).
  	otherwise({
  		redirectTo: '/home'
  	});
}]);