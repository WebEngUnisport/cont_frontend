angular.module('myApp.controllers').
controller('Index', ['$scope','$rootScope','backend',function ($scope,$rootScope,backend, $http) {
    $scope.ViewCourse = function(id){
        //$rootScope.courseToShow = id;        
        //$location.path('showCourse');
        console.log(id);
    }
}]
)