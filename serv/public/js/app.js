'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
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
    otherwise({
      redirectTo: '/seeMessages'
    });

  $locationProvider.html5Mode(true);
});
