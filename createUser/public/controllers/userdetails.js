var app=angular.module("mymodule",[]).controller("mycontroller",function($scope, $http){
    $http.get('/cuser').then(function(response){
        console.log("i got the data i requested");
        $scope.cuser = response.data;
        console.log($scope.cuser);
    });
});
