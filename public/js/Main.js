/**
 * Created by David on 16/6/25.
 */
var app = angular.module('WatchDog', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    var login = {
        name: 'login',
        url: '/login',
        controller: 'LoginCont',
        templateUrl: 'html/Login.html'
    };
    var signup = {
        name: 'signup',
        url: '/signup',
        controller: 'SignCont',
        templateUrl: 'html/SignUp.html'
    };
    var retrieve = {
        name: 'retrieve',
        url: '/retrieve',
        controller: 'RetrCont',
        templateUrl: 'html/Retrieve.html'
    };
    $stateProvider.state(login);
    $stateProvider.state(signup);
    $stateProvider.state(retrieve);
    $urlRouterProvider.otherwise('/login');
});
