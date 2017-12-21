angular.module('myApp.controllers').
controller('Index', ['$scope','$rootScope','$http','$location','backend',function ($scope,$rootScope,$http,$location,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/random'
       })
       .
       success(function (data, status, headers, config) {
            $scope.course = data;
       }).
       error(function(error){
           console.log("Error on server");
       });
    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
    }
}]
)