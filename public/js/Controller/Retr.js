/**
 * Created by David on 30/11/2016.
 */
var app = angular.module('WatchDog', []);
app.controller('RetrCont', function($scope, $state) {
    $scope.data = {};
    $scope.goState = function(add) {
        $state.go(add);
    };
    $scope.retr = function() {
        
    };
});
