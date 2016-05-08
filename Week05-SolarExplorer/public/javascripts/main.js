var elfApp = angular.module("elfApp");

elfApp.controller('MainController', function($scope, $http) {
    $scope.mainData = "Main Data";
    $scope.index = 0;
    $scope.getRenewable = function() {
        console.log('getRenewable');
        $http.get('data/Renewable.json')
            .then(function(res) {
                console.log(res.data[0]);
                $scope.renewable = res.data;
                
            });
    };

   
});

elfApp.directive('elfRenewable', function() {
    'use strict';
    return {
        controller: 'MainController',
        templateUrl:  'renewable'
    };
});