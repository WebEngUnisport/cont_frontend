angular.module('myApp.controllers').
controller('AllCourses', ['$scope','$http','$rootScope','$location','backend',function ($scope, $http,$rootScope,$location,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/courses'
       })
       .
       success(function (data, status, headers, config) {
        printCourses(data);
       }).
       error(function(error){
           console.log("Error on server");
       });
    
    var printCourses = function(data){
        $('#results').css('display',"block");
        $scope.courses = data;
        //$('#results').text("test");
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
        //console.log(id);
    }
    
}

  ]).controller('Categories', ['$scope','$http','$rootScope','$location','backend',function ($scope, $http,$rootScope,$location,backend) {

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
        $('#results').css('display',"block");
        $scope.courses = data;
        //$('#results').text("test");
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
        //console.log(id);
    }

  }]).controller('Uni', ['$scope','$http','$rootScope','$location','backend',function ($scope, $http,$rootScope,$location,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/universities'
       })
       .
       success(function (data, status, headers, config) {
            $scope.universities = data;
       }).
       error(function(error){
           console.log("Error on server");
       });
    $scope.formData = {};
    $scope.processForm = function(){
        $http({
            method  : 'GET',
            url     : backend+'/university/'+$scope.formData.select+"/courses"
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
        $('#results').css('display',"block");
        $scope.courses = data;
        //$('#results').text("test");
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
        //console.log(id);
    }
    

  }]).controller('ShowCourses', ['$scope','$http','$rootScope','backend',function ($scope, $http,$rootScope,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/course/'+$rootScope.courseToShow
       })
       .
       success(function (data, status, headers, config) {
           var description = "";
           if('description' in data){
            description = data['description'].replace(new RegExp("\n",'g'),'<br\>');
           }
           
           $scope.courses = data;
           $('#description').html(description);
       }).
       error(function(error){
           console.log("Error on server");
       });

  }]).controller('Days', ['$scope','$http','$rootScope','backend',function ($scope, $http,$rootScope,backend) {

    $scope.formData = {};
    $scope.processForm = function(){
        $http({
            method  : 'GET',
            url     : backend+'/university/'+$scope.formData.select+"/courses"
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
        $('#results').css('display',"block");
        $scope.courses = data;
        //$('#results').text("test");
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
        //console.log(id);
    }

  }])