var app=angular.module("mymodule",[]).controller("mycontroller",function($scope, $http){
    $scope.addTask= function(){
        console.log($scope.ctasks);
        $http.post('/ctask', $scope.ctasks).then(function(response){
            console.log("i got the data i requested");
            console.log(response.data);
        });
    };
});