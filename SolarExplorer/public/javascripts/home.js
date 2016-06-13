elfApp.controller('HomeController', function ($scope, $http) {
    'use strict';

    $scope.mainData = 'HomeController MainData';
    $scope.resultFull = '/database/saveSettings';
    $scope.resultMirror = '/database/saveSettings';
    $scope.list = ['foo'];
    $scope.formData = {
        'dataType': 'a',
        'dataSource': 'b',
        'comment': 'c'
    };
    $scope.text = 'hello';

    $scope.submit = function () {
        $http.post('/database/updateSettings', $scope.formData).then(function (result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.query, null, 4);
        }, function(err) {
            console.log(err);
        });
        console.log($scope.formData);
    };

    function readSettings() {
        $http.get('/database/getSettings').then(function (result) {
            $scope.resultFull = JSON.stringify(result, null, 4);
            $scope.resultMirror = JSON.stringify(result.data.settings, null, 4);
            $scope.formData = {
                'dataType': result.data.settings.dataType,
                'dataSource': result.data.settings.dataSource,
                'comment': result.data.settings.comment
            };
        }, function(err) {
            console.log(err);
        });
        console.log($scope.formData);
    }
    readSettings();
});