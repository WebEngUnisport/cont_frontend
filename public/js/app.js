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
    when('/', {
      templateUrl: 'partials/home',
      controller: 'Index'
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
      controller: 'AllCourses'
    }).
    when('/search/days', {
      templateUrl: 'partials/days',
      controller: 'Days'
    }).
    when('/search/dates', {
      templateUrl: 'partials/dates',
      controller: 'Dates'
    }).
    when('/showCourse', {
      templateUrl: 'partials/showCourses',
      controller: 'ShowCourses'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
