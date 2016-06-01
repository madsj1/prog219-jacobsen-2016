var elfApp = angular.module('elfApp');

function EnergyTypesUtils() {
    'use strict';

    var data;

    this.name = 'energyTypesUtils';

    this.init = function(initRenewables) {
        this.data = initRenewables;
    };

    this.getItemCount = function() {
        return this.data.length;
    };

    this.getByIndex = function(index) {
        return this.data[index];
    };

    this.getByMSN = function(msn){
        var temp = [];
        for (var i = 0; i < this.data.length; i++) {
            if(this.data[i].MSN==msn){
                temp.push(this.data[i])
            }
        }
        return temp;
        
    }
}

elfApp.service('energyTypesUtils', EnergyTypesUtils);
