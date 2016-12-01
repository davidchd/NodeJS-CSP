/**
 * Created by David on 30/11/2016.
 */
var app = angular.module('WatchDog', []);
app.controller('SignCont', function($scope, $state) {
    $scope.data = {};
    $scope.goState = function(add) {
        $state.go(add);
    };
    $scope.sign = function() {
        alert($scope.data);
        console.log($scope.data);
    };
});
