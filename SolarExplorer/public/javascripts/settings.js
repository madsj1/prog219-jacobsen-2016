/*
var myModule = angular.module('elfApp');

myModule.factory('settings', function($scope) {

    'use strict';

    function settings() {}

    settings.useDatabase = true;
    settings.useLocalMongoDb = true;

    var report = function() {
        console.log('useDatabase', settings.useDatabase);
        console.log('useLocalMongoDb', settings.useLocalMongoDb);
    };

    settings.setSettings = function(settings) {
        this.useDatabase = settings.dataType.toLowerCase() === 'database';
        this.useLocalMongoDb = settings.dataSource.toLowerCase() === 'local mongodb';
        report();
    };

    return settings;
});

$scope.getRenewable = function() {
    'use strict';
    var dataType = settings.useDatabase ? 0 : 1;
    var urls = ['/database/allRenewables', 'data/Renewable.json'];
    $http.get(urls[dataType])
        .then(function(res) {
            if (settings.useDatabase) {
                $scope.renewable = renewableUtils.getComplexFormat(res.data.renewables);
            } else {
                $scope.renewable = res.data;
            }
            renewableUtils.init($scope.renewable);
            renewableUtils.init($scope.renewable);
            $scope.renewableUtils = renewableUtils;
        });
};

this.getComplexFormat = function(simpleRenewables) {
    'use strict';
    return simpleRenewables.map(function(renewable) {
        return {
            Year: renewable.year,
            'Solar (quadrillion Btu)': renewable.solar,
            'Geothermal (quadrillion Btu)': renewable.geothermal,
            'Wind power (quadrillion Btu)': renewable.wind,
            'Other biomass (quadrillion Btu)': renewable.biomass,
            'Liquid biofuels (quadrillion Btu)': renewable.biofuels,
            'Wood biomass (quadrillion Btu)': renewable.wood,
            'Hydropower (quadrillion Btu)': renewable.hydropower
        };
    });
};
*/
var myModule = angular.module('elfApp');

myModule.factory('settings', function() {

    'use strict';

    function settings() {}

    settings.useDatabase = true;
    settings.useLocalMongoDb = true;

    var report = function() {
        console.log('useDatabase', settings.useDatabase);
        console.log('useLocalMongoDb', settings.useLocalMongoDb);
    };

    settings.setSettings = function(settings) {
        this.useDatabase = settings.dataType.toLowerCase() === 'database';
        this.useLocalMongoDb = settings.dataSource.toLowerCase() === 'local mongodb';
        report();
    };

    return settings;
});
