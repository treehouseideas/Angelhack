var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
        .when("/", {templateUrl: '/partials/main', controller: 'mainCtrl'})
        .when('/home', {templateUrl: '/partials/home', controller: 'homeCtrl'})
        .when('/history', {templateUrl: '/partials/history', controller: 'historyCtrl'})
        .when('/mine', {templateUrl: '/partials/mystuff', controller: 'myCtrl'})
        .when('/theirs', {templateUrl: '/partials/theirstuff', controller: 'theirCtrl'})
        .when('/signup', {templateUrl: '/partials/signup', controller: 'signupCtrl'})


});