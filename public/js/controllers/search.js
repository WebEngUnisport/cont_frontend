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
        $('#loading').css('display','none');
        $('#results').css('display',"block");
        $scope.courses = data;
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
    }
    
}

  ]).controller('Categories', ['$scope','$http','$rootScope','$location','backend',function ($scope, $http,$rootScope,$location,backend) {

    var isDate = false;

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
        if(isDate){
            var from = $scope.formData.dateFrom;
            var to = $scope.formData.dateTo

            if(from>to){
                console.log("To smaller than from")
                var temp = from;
                from = to;
                to = temp;
            }
            $http({
                method  : 'GET',
                url     : backend+'/categories/'+$scope.formData.select+"?from="+from+"T00:00:00&to="+to+"T24:00:00"
               })
               .
               success(function (data, status, headers, config) {
                    printCourses(data);
               }).
               error(function(error){
                   console.log("Error on server");
               });
        }
        else{
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
        
    }
    
    var printCourses = function(data){
        $('#loading').css('display','none');
        $('#results').css('display',"block");
        $('#filter').css('display',"block");
        $scope.data = data;
        $scope.courses = $scope.data;
    }

    $scope.Filter = function(id){
        var filtered = [];
        if(id != "ALL"){
            for (var i = 0; i<$scope.data.length;i++){
                var data = $scope.data[i]
                if(data['university']['code']==id){
                    filtered.push(data);
                }
            }
            $scope.courses = filtered;
        }
        else{
            $scope.courses = $scope.data;
        }
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
    }

    $scope.DateToggle = function(){
        if(isDate){
            $('#date').removeClass("btn-danger");
            $('#date').addClass("btn-success")
            $('#from').prop("disabled",true);
            $('#to').prop("disabled",true);
            isDate = false;
        }else{
            $('#date').removeClass("btn-success");
            $('#date').addClass("btn-danger");
            $('#from').removeAttr("disabled");
            $('#to').removeAttr("disabled");
            isDate = true;
        }
    }

  }]).controller('Uni', ['$scope','$http','$rootScope','$location','backend',function ($scope, $http,$rootScope,$location,backend) {

    var isDate = false;

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

        if(isDate){
            var from = $scope.formData.dateFrom;
            var to = $scope.formData.dateTo

            if(from>to){
                console.log("To smaller than from")
                var temp = from;
                from = to;
                to = temp;
            }
            $http({
                method  : 'GET',
                url     : backend+'/university/'+$scope.formData.select+"/courses"+"?from="+from+"T00:00:00&to="+to+"T24:00:00"
               })
               .
               success(function (data, status, headers, config) {
                    printCourses(data);
               }).
               error(function(error){
                   console.log("Error on server");
               });
            
        }
        else{
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
        
    }
    
    var printCourses = function(data){
        $('#loading').css('display','none');
        $('#results').css('display',"block");
        $scope.courses = data;
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
    }

    $scope.DateToggle = function(){
        if(isDate){
            $('#date').removeClass("btn-danger");
            $('#date').addClass("btn-success")
            $('#from').prop("disabled",true);
            $('#to').prop("disabled",true);
            isDate = false;
        }else{
            $('#date').removeClass("btn-success");
            $('#date').addClass("btn-danger");
            $('#from').removeAttr("disabled");
            $('#to').removeAttr("disabled");
            isDate = true;
        }
    }
    

  }]).controller('ShowCourses', ['$scope','$http','$rootScope','backend',function ($scope, $http,$rootScope,backend) {

    $http({
        method  : 'GET',
        url     : backend+'/course/'+$rootScope.courseToShow
       })
       .
       success(function (data, status, headers, config) {
           var description = "";
           var price = "No info";
           var times = "";
           var material = "No requirements";

           if('description' in data){
            description = data['description'].replace(new RegExp("\n",'g'),'<br\>').replace(new RegExp("ONLINE\s?.?\s?[iI]\S?",'g'),' ');
           }
           else{
               description = "No description provided";
           }
           if('price' in data){
               price = data['price'];
           }
           if('times' in data){
               times = data['times'];
           }
           else{
               times = data['day'];
               if('time' in data){
                   times += " " + data['time'];
               }
           }
           if('material' in data){
                material = data['material'];
           }
           if('requirements' in data){
               $('#requirements').html(data['requirements']);
               $('#req-tr').css('display','table-row');
           }
           $scope.courses = data;
           $('#description').html(description);
           $('#price').html(price);
           $('#times').html(times);
           $('#material').html(material);

           $('#show').css('display','block');
       }).
       error(function(error){
           console.log("Error on server");
       });

  }]).controller('Days', ['$scope','$http','$rootScope','$location','backend',function ($scope, $http,$rootScope,$location,backend) {

    $scope.formData = {};
    $scope.processForm = function(){
        $http({
            method  : 'GET',
            url     : backend+'/day/'+$scope.formData.select
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
        $('#loading').css('display','none');
        $('#results').css('display',"block");        
        $('#filter').css('display',"block");
        $scope.data = data;
        $scope.courses = $scope.data;
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
    }

    $scope.Filter = function(id){
        var filtered = [];
        if(id != "ALL"){
            for (var i = 0; i<$scope.data.length;i++){
                var data = $scope.data[i]
                if(data['university']['code']==id){
                    filtered.push(data);
                }
            }
            $scope.courses = filtered;
        }
        else{
            $scope.courses = $scope.data;
        }
    }

  }]).controller('Dates', ['$scope','$http','$rootScope','$location','backend',function ($scope, $http,$rootScope,$location,backend) {

    $scope.formData = {};
    $scope.processForm = function(){

        $('#loading').css('display','block');
        $('#bottom').css('display','none');
        var from = $scope.formData.dateFrom;
        var to = $scope.formData.dateTo;

        if(from&&to){

            if(from>to){
                console.log("To smaller than from")
                var temp = from;
                from = to;
                to = temp;
            }
            $http({
                method  : 'GET',
                url     : backend+'/courses?from='+from+"T00:00:00&to="+to+"T24:00:00"
               })
               .
               success(function (data, status, headers, config) {
                    printCourses(data);
               }).
               error(function(error){
                   console.log("Error on server");
               });
            
        }
        else{
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

        }
        
    }
    
    var printCourses = function(data){
        $('#loading').css('display','none');
        $('#bottom').css('display',"block"); 
        $('#results').css('display',"block");        
        $('#filter').css('display',"block");
        $scope.data = data;
        $scope.courses = $scope.data;
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
    }

    $scope.Filter = function(id){
        var filtered = [];
        if(id != "ALL"){
            for (var i = 0; i<$scope.data.length;i++){
                var data = $scope.data[i]
                if(data['university']['code']==id){
                    filtered.push(data);
                }
            }
            $scope.courses = filtered;
        }
        else{
            $scope.courses = $scope.data;
        }
    } 

  }]).controller('Today', ['$scope','$rootScope','$http','$location','backend',function ($scope,$rootScope,$http,$location,backend) {

    var time = new Date();
    var from = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
    var to = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+(time.getDate());

    $http({
        method  : 'GET',
        url     : backend+'/courses?from='+from+"T00:00:00&to="+to+"T24:00:00"
       })
       .
       success(function (data, status, headers, config) {
           printCourses(data);
            
       }).
       error(function(error){
           console.log("Error on server");
       });

       var printCourses = function(data){
        $('#loading').css('display','none');
        $('#bottom').css('display',"block"); 
        $('#results').css('display',"block");        
        $('#filter').css('display',"block");
        $scope.data = data;
        $scope.courses = $scope.data;
    }

    $scope.ViewCourse = function(id){
        $rootScope.courseToShow = id;        
        $location.path('showCourse');
    }

    $scope.Filter = function(id){
        var filtered = [];
        if(id != "ALL"){
            for (var i = 0; i<$scope.data.length;i++){
                var data = $scope.data[i]
                if(data['university']['code']==id){
                    filtered.push(data);
                }
            }
            $scope.courses = filtered;
        }
        else{
            $scope.courses = $scope.data;
        }
    } 
}]
)