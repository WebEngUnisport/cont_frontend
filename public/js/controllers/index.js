angular.module('myApp.controllers').
controller('Index', ['$scope','$rootScope','$http','$location','backend',function ($scope,$rootScope,$http,$location,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/random'
       })
       .
       success(function (data, status, headers, config) {
           if(data == "empty"){
            $scope.courseR = {'sport':"No sport today"};
           }
           else{
            $scope.courseR = data;
           }
            
       }).
       error(function(error){
           console.log("Error on server");
       });
    var time = new Date();
    var from = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
    var to = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+(time.getDate()+1);
    //var from = date;
    //var to = date;
    $http({
        method  : 'GET',
        url     : backend+'/random'+"?from="+from+"&to="+to
       })
       .
       success(function (data, status, headers, config) {
           if(data == "empty"){
               $scope.courseD = {'sport':"No sport today"};
           }
           else{
            $scope.courseD = data;
           }
            
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