var app = angular.module('myApp', []);
app.controller('nicController', function ($scope,$http) {
   $scope.submit= function(){
      console.log("in controller");
       var nic={};
       nic["nicData"]=$scope.nic;
       $http.post('/api/nicProcess',nic).success(function(data, status) {
        console.log('Data posted successfully');
        console.log(data);
           $scope.data1=data;
       });
       
   }
   
});
    