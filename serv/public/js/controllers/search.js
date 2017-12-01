angular.module('myApp.controllers').
controller('Search', function ($scope, $http) {

    $http({
        method  : 'GET',
        url     : 'http://localhost:8080/categories'
       })
       .
       success(function (data, status, headers, config) {
            $scope.categories = data;
            console.log(data);
       });
    $scope.formData = {};
    $scope.processForm = function(){
    
	}

  })