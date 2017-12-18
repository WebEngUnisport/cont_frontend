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
       }).
       error(function(error){
           console.log("Error on server");
       });
    $scope.formData = {};
    $scope.processForm = function(){
    
	}

  }).controller('Categories', ['$scope','$http','backend',function ($scope, $http,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/categories'
       })
       .
       success(function (data, status, headers, config) {
            $scope.categories = data;
            console.log(data[0]['Name']);
       }).
       error(function(error){
           console.log("Error on server");
       });
    $scope.formData = {};
    $scope.processForm = function(){
    
	}

  }]).controller('Courses', ['$scope','$http','backend',function ($scope, $http,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/categories'
       })
       .
       success(function (data, status, headers, config) {
            $scope.categories = data;
            console.log(data[0]['Name']);
       }).
       error(function(error){
           console.log("Error on server");
       });
    $scope.formData = {};
    $scope.processForm = function(){
    
	}

  }]).controller('Uni', ['$scope','$http','backend',function ($scope, $http,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/universities'
       })
       .
       success(function (data, status, headers, config) {
            $scope.categories = data;
            console.log(data);
       }).
       error(function(error){
           console.log("Error on server");
       });
    $scope.formData = {};
    $scope.processForm = function(){
    
	}

  }])