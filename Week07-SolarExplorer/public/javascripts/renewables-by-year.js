
var elfApp = angular.module("elfApp");

elfApp.controller('RenewableByYearController', function($scope, $http, renewableUtils) {
    $scope.index = 0;
    $scope.userYearInput = 2006

    $scope.getByYear = function(year) {
        var renewableData = $scope.renewableUtils.getByYear(year);
        $scope.index = renewableData.index;
        $scope.renewableByYear = renewableData.renewable;
        return $scope.renewableByYear;
    };

    $scope.getRenewableByYear = function() {
        $http.get('data/Renewable.json')
            .then(function(res) {
                renewableUtils.init(res.data);
                $scope.renewable = res.data;
                $scope.renewableUtils = renewableUtils;
                $scope.simpleFormat = renewableUtils.getSimpleFormat();
                $scope.getByYear($scope.userYearInput)
            });
    };
});


elfApp.directive('elfRenewableByYear', function() {
    'use strict';
    return {
        controller: 'RenewableByYearController',
        templateUrl: 'renewable-by-year'
    };
});
