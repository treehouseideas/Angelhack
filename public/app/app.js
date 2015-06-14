var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
        .when("/", {templateUrl: '/partials/mystuff', controller: 'myCtrl'})
        .when('/history', {templateUrl: '/partials/history', controller: 'historyCtrl'})
        .when('/mine', {templateUrl: '/partials/mystuff', controller: 'myCtrl'})
        .when('/signup', {templateUrl: '/partials/signup', controller: 'signupCtrl'})


});