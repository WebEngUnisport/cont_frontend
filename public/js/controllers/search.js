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
       }).
       error(function(error){
           console.log("Error on server");
       });
    $scope.formData = {};
    $scope.processForm = function(){
        $http({
            method  : 'GET',
            url     : backend+'/categories/'+$scope.formData.select
           })
           .
           success(function (data, status, headers, config) {
                printCourses(data);
           }).
           error(function(error){
               console.log("Error on server");
           });
    }
    
    var printCourses = function(data){
        $scope.courses = data;
        //$('#results').text("test");
    }

    $scope.ViewCourse = function(id){
        $http({
            method  : 'GET',
            url     : backend+'/course/'+id
           })
           .
           success(function (data, status, headers, config) {
                console.log(data);
           }).
           error(function(error){
               console.log("Error on server");
           });
        //console.log(id);
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