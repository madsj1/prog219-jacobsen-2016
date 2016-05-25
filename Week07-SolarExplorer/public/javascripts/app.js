var myModule = angular.module("elfApp", ['ngRoute']);

myModule.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl: "main",
        controller: "MainController"
    }).when('/about', {
        templateUrl: "about",
        controller: "AboutController",
        controllerAs: 'aboutController'
    }).when('/simple-format', {
        templateUrl: 'simple-format-page',
        controller: 'SimpleFormatController'
    }).when('/renewable-by-year', {
        templateUrl: 'renewable-by-year-page',
        controller: 'RenewableByYearController'
    }).otherwise({
        redirectTo: '/'
    });
});
