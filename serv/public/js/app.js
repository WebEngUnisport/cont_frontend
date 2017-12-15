'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.factories',
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/seeMessages', {
      templateUrl: 'partials/seeMessages',
      controller: 'seeMessagesCtrl'
    }).
    when('/sendMessage', {
      templateUrl: 'partials/sendMessage',
      controller: 'sendMessageCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'Login'
    }).
    when('/search/uni', {
      templateUrl: 'partials/uni',
      controller: 'Search'
    }).
    when('/search/categories', {
      templateUrl: 'partials/categories',
      controller: 'Search'
    }).
    when('/search/courses', {
      templateUrl: 'partials/courses',
      controller: 'Search'
    }).
    when('/search', {
      templateUrl: 'partials/search',
      controller: 'Search'
    }).
    otherwise({
      redirectTo: '/seeMessages'
    });

  $locationProvider.html5Mode(true);
});
