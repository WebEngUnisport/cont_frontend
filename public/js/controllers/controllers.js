'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('seeMessagesCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'http://webengi.marom.ch:10080/api/messages'
    }).
    success(function (data, status, headers, config) {
      $scope.messages = data;
    }).
    error(function (data, status, headers, config) {
      $scope.messages = 'Error!';
    });

  }).
  controller('sendMessageCtrl', function ($scope,$http) {
    $scope.formData = {};
    $scope.processForm = function(){
      $http({
  	method  : 'POST',
  	url     : 'http://webengi.marom.ch:10080/api/messages',
  	data    : $.param($scope.formData),  // pass in data as strings
  	headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
 	})
  	.success(function(data) {
    	console.log(data);
        var info = angular.element( document.querySelector('#info'));
        info.html("Message: '"+$scope.formData.content+"' send with success!");
  	});
	}

  });
