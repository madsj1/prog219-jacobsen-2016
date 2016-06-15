var elfApp = angular.module('elfApp');

elfApp.controller('EnergySelectorController', function($scope, $http, energyTypesUtils, msnTypes) {
    'use strict';
    $scope.index = 0;
    $scope.getEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(response) {
                energyTypesUtils.init(response.data);
                $scope.energyTypesUtils = energyTypesUtils;
                $scope.datatypes = $scope.combine(msnTypes(response.data));
                $scope.msn = $scope.datatypes[0];
                $scope.updatelist();
            }, function errorCallback(response) {
                console.log('Error:', response.status, response.statusText);
            });
    };
    $scope.combine = function(msn) {
        var temp = [];
        for (var i = 0; i < msn.length; i++) {
            temp.push(msn[i].msn + ':' + msn[i].description);
        }
        return temp;
    };

    $scope.updatelist = function() {
        $scope.energyTypes = $scope.energyTypesUtils.getByMSN($scope.msn.split(':', 1));
    };

});

elfApp.directive('elfEnergySelector', function() {
    'use strict';
    return {
        controller: 'EnergySelectorController',
        templateUrl: 'energy-types/energy-selector'
    };
});
