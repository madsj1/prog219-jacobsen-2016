var myModule = angular.module('elfApp', ['ngRoute']);

myModule.config(function($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider.when('/', {
        templateUrl: 'home',
        controller: 'HomeController'
    }).when('/about', {
        templateUrl: 'about',
        controller: 'AboutController',
        controllerAs: 'aboutController'
    }).when('/simple-format', {
        templateUrl: 'renewables/simple-format-page',
        controller: 'SimpleFormatController'
    }).when('/renewables-by-year', {
        templateUrl: 'renewables/renewable-by-year-page',
        controller: 'RenewableByYearController'
    }).when('/home', {
        templateUrl: 'home',
        controller: 'HomeController'
    }).when('/renewables-page', {
        templateUrl: 'renewables/renewables-page',
        controller: 'MainController'
    }).when('/energy-types', {
        templateUrl: 'energy-types/energy-types-page',
        controller: 'EnergyTypesController'
    }).when('/energy-selector', {
        templateUrl: 'energy-types/energy-selector-page',
        controller: 'EnergySelectorController'
    }).otherwise({
        redirectTo: '/'
    });
});
