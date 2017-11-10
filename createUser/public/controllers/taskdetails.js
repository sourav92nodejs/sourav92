var app=angular.module("mymodule",[]).controller("mycontroller",function($scope, $http){
    $http.get('/ctask').then(function(response){
        console.log("i got the data i requested");
        $scope.ctask = response.data;
        console.log($scope.ctask);
    });
});
