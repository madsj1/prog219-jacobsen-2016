var express = require('express');
var router = express.Router();
var Settings = require('../models/settings');
var Renewables = require('../models/renewables');
var connect = require('./connect');
var dataType = 'Database';

function saveSettings(request, response) {
    'use strict';
    console.log('request body', request.body);

    var newSettings = new Settings({
        'keyNote': 'settings',
        'dataSource': request.body.dataSource,
        'dataType': request.body.dataType,
        'comment': request.body.comment
    });

    console.log('inserting', newSettings.comment);

    newSettings.save(function(err) {
        if (err) {
            console.log(err);
        }
        console.log('saved: ', newSettings.dataSource, newSettings.dataType, newSettings.comment);
        response.send({
            result: 'success',
            query: request.body
        });

    });
}

router.post('/updateSettings', function(request, response) {
    'use strict';
    console.log('request body', request.body);
    if (!connect.connected) {
        connect.doConnection(true);
    }

    Settings.findOne({
        keyNote: 'settings'
    }, function(err, doc) {
        console.log('findone', err, doc);
        if (err) {
            return response.send({
                result: 'error'
            });
        } else {
            if (doc === null) {
                saveSettings(request, response);
            } else {
                doc.dataType = request.body.dataType;
                doc.dataSource = request.body.dataSource;
                doc.comment = request.body.comment;
                dataType = doc.dataType;
                doc.save();
                return response.send({
                    result: 'succes',
                    setting: doc
                });
            }
        }
    });
});

router.get('/getSettings', function(request, response) {
    'use strict';
    console.log('request body', request.body);
    if (!connect.connected) {
        connect.doConnection(true);
    }

    Settings.findOne({
        keyNote: 'settings'
    }, function(err, doc) {
        console.log('findone', err, doc);
        if (err) {
            return response.send({
                result: 'error'
            });
        } else {
            if (doc === null) {
                return response.send({
                    settings: {
                        dataType: 'Database',
                        dataSource: 'Local MongoDb',
                        comment: 'Default Comment'
                    }
                });
            } else {
                dataType = doc.dataType;
                return response.send({
                    settings: doc
                });
            }
        }
    });
});

router.get('/getRenewablesData', function(request, response) {
    'use strict';

    if (!connect.connected) {
        connect.doConnection(true);
    }
    Renewables.find({}, function(err, doc) {
        if (err) {
            return response.send({
                result: 'error'
            });
        } else {
            return response.send({
                dataType: dataType,
                renewables: doc
            });
        }
    });
});

router.post('/addRenewables', function(request, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection(true);
    }
    var renews = [];
    for (var i = 0; i < request.body.length; i++) {
        var ren = new Renewables({
            'Year': request.body[i].Year,
            'Solar (quadrillion Btu)': request.body[i]['Solar (quadrillion Btu)'],
            'Geothermal (quadrillion Btu)': request.body[i]['Geothermal (quadrillion Btu)'],
            'Other biomass (quadrillion Btu)': request.body[i]['Other biomass (quadrillion Btu)'],
            'Wind power (quadrillion Btu)': request.body[i]['Wind power (quadrillion Btu)'],
            'Liquid biofuels (quadrillion Btu)': request.body[i]['Liquid biofuels (quadrillion Btu)'],
            'Wood biomass (quadrillion Btu)': request.body[i]['Wood biomass (quadrillion Btu)'],
            'Hydropower (quadrillion Btu)': request.body[i]['Hydropower (quadrillion Btu)']
        });
        renews.push(ren);
    }
    /*
        for (var k = 0; k < renews.length; k++) {
            var found = false;
            Renewables.findOne({
                Year: renews[k].Year
            }, function(err, doc) {
                if (err) {
                    return response.send({
                        result: 'error'
                    });
                } else {
                    if (doc !== null) {
                        found = true;
                    }
                }
            });
            if (!found) {
                renews[k].save();
            }
        }
        return response.send({
            result: 'success',
            renewables: renews
        });

    });
    */
    router.delete('/deleteAllRenewables', function(request, response) {

        if (!connect.connected) {
            connect.doConnection(true);
        }
        Renewables.remove({}, function(err) {
            console.log('collection removed');
            return response.send({
                result: 'Collection removed'
            });
        });

    });
});
module.exports = router;
