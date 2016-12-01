/**
 * Created by David on 30/11/2016.
 */
var app = angular.module('WatchDog',[]);
app.controller('LoginCont', function($scope, $state, $http) {
    // $scope.data = {};
    $scope.goState = function(add) {
        alert("hello");
        $state.go(add);
    };
    $scope.login = function() {
        $http.post(endpoint, data).success(function(res){
            console.log(res);
        });
    };
});
