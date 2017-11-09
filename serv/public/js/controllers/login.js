angular.module('myApp.controllers').
controller('Login', function ($scope, $http) {

    $scope.formData = {};
    $scope.processForm = function(){
	console.log($scope.formData)
      $http({
  	method  : 'POST',
  	url     : 'http://localhost:10080/api/login',
  	data    : $.param($scope.formData),  // pass in data as strings
  	headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
 	})
  	.success(function(data) {
    	console.log(data);
        var info = angular.element( document.querySelector('#info'));
        info.html("Message: '"+$scope.formData.content+"' send with success!");
  	});
	}

  })
