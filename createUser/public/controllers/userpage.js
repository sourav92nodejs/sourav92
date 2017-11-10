var app=angular.module("mymodule",[]).controller("mycontroller",function($scope, $http){
    $scope.addUser= function(){
        console.log($scope.cusers);
        $http.post('/cuser', $scope.cusers).then(function(response){
            console.log("i got the data i requested");
            console.log(response.data);
        });
    };
});
