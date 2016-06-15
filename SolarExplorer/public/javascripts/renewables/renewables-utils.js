var elfApp = angular.module('elfApp');

function RenewableUtils() {
    'use strict';

    var renewables;

    this.name = 'renewableUtils';

    this.init = function(initRenewables) {
        renewables = initRenewables;
    };

    this.getItemCount = function() {
        return renewables.length;
    };

    this.getByIndex = function(index) {
        return renewables[index];
    };

    this.getYears = function() {
        return renewables.map(function(renewable) {
            return renewable.Year;
        });
    };

    this.getSimpleFormat = function() {
        var temp = [];
        for (var i = 0; i < renewables.length; i++) {
            var tempobj = {
                'geo': parseFloat(renewables[i]['Geothermal (quadrillion Btu)']),
                'solar': parseFloat(renewables[i]['Solar (quadrillion Btu)']),
                'wind': parseFloat(renewables[i]['Wind power (quadrillion Btu)'])
            };
            temp.push(tempobj);
        }
        return temp;

        // YOU WRITE THE LASt TWO METHODS

    };

    this.getSimpleStringFormat = function() {
        var temp = [];
        for (var i = 0; i < renewables.length; i++) {
            var tempobj = {
                'geo': renewables[i]['Geothermal (quadrillion Btu)'],
                'solar': renewables[i]['Solar (quadrillion Btu)'],
                'wind': renewables[i]['Wind power (quadrillion Btu)']
            };
            temp.push(tempobj);
        }
        return temp;
    };

    this.getByYear = function(year) {
        for (var i = 0; i < renewables.length; i++) {
            if (renewables[i].Year == year) {
                return {
                    index: i,
                    renewable: renewables[i]
                };
            }
        }
    };
}

elfApp.service('renewableUtils', RenewableUtils);
