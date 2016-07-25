var app = angular.module('myApp', []);
app.controller('nicController', function ($scope,$http) {
   $scope.submit= function(){
      console.log("in controller");
       var nic={};
       nic["nicData"]=$scope.nic;
       $http.post('/api/nicProcess',nic).success(function(data, status) {
        console.log('Data posted successfully');
        console.log(data);
        var year =data.birthyear;
        var month =data.birthmonth;
        var day =data.birthdate;
        var gender =data.gender;
           
           $scope.year = year;
           $scope.month = month;
           $scope.day = day;
           $scope.gender = gender;
       });
       
   }
   
});
    