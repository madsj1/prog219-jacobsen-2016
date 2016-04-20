/*global describe, it */


describe('Integration Tests', function() {
    'use strict';

    var elvenController, scope;

    beforeEach(module('elvenApp'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        elvenController = $controller('ElvenController', {
            $scope: scope
        });
    }));

    it('should prove we loaded jasmine', function() {
        expect(true).toBe(true);
    });

    it('should get a hint of eight characters', function() {
        expect(elvenController.hint.length).toBe(8);
    });

    it('should set elvenController.hint to "My hint."', function() {
        expect(elvenController.hint).toBe('My hint.');
        
    });
        
    
    it('should add 1 and 2 and return 3', function() {
        expect(elvenController.addNumbers(1, 2)).toBe(3);
        
    }); 
        
    it('should return square root of 25', function() {
        expect(elvenController.square(25)).toBe(5);
    
    }); 
    
});
