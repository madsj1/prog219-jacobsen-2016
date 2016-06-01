var elfApp = angular.module("elfApp");

elfApp.controller('EnergyTypesController', function($scope, $http, energyTypesUtils, msnTypes) {
    $scope.index = 0;
    $scope.getEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(response) {
                energyTypesUtils.init(response.data);
                $scope.energyTypes = response.data;
                $scope.msn = msnTypes(response.data)
            }, function errorCallback(response) {
                console.log('Error:', response.status, response.statusText);
            });
    };

});

elfApp.directive('elfEnergyTypes', function() {
    'use strict';
    return {
        controller: 'EnergyTypesController',
        templateUrl: 'energy-types/energy-types'
    };
});

elfApp.directive('elfEnergyTypesMsn', function() {
    'use strict';
    return {
        controller: 'EnergyTypesController',
        templateUrl: 'energy-types/energy-types-msn'
    };
});
