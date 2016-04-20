/**
 * Created by charlie on 5/6/2015.
 */

(function() {
    var app = angular.module('elvenApp', []);

    app.controller('ElvenController', function() {
        var elvenController = this;

        elvenController.hint = "My hint.";
        
        
        elvenController.addNumbers = function(a, b) {
            return a + b;
        };
        
        elvenController.square = function(a) {
            return Math.sqrt(25);
        };
        
    });

})();