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
    when('/search/uni', {
      templateUrl: 'partials/uni',
      controller: 'Uni'
    }).
    when('/search/categories', {
      templateUrl: 'partials/categories',
      controller: 'Categories'
    }).
    when('/search/courses', {
      templateUrl: 'partials/courses',
      controller: 'Courses'
    }).
    when('/search', {
      templateUrl: 'partials/search',
      controller: 'Search'
    }).
    when('/showCourse', {
      templateUrl: 'partials/showCourses',
      controller: 'ShowCourses'
    }).
    otherwise({
      redirectTo: '/seeMessages'
    });

  $locationProvider.html5Mode(true);
});
