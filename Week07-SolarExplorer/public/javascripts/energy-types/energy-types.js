var elfApp = angular.module("elfApp");

elfApp.controller('EnergyTypesController', function($scope, $http, energyType) {
    $scope.mainData = "Main Data";
    $scope.index = 0;
    $scope.getEnergyTypes = function() {
        $http.get('data/EnergyTypes.json')
            .then(function(res) {
                $scope.energyType = res.data
            });
    };


});