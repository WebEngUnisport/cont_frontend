angular.module('myApp.controllers').
controller('Login', ['AuthenticationService','$scope',function (AuthenticationService,$scope) {

    $scope.formData = {};
    $scope.processForm = function(){
      AuthenticationService.Login($scope.formData.email,$scope.formData.password, function(response){
        console.log(response);
      });
    }
  }]);
