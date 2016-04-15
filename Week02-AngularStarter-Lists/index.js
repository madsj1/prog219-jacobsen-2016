(function() {

    var app = angular.module('main', []);

    app.controller('ListControl', function($scope) {

        'use strict';        

        var listData = [
            { text : 'Attend class at BC', done : false },
            { text : 'Complete JavaScript programs', done : false }
        ];

        $scope.todoList = listData;   
    });
})();