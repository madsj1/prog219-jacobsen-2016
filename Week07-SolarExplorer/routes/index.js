var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week05-SolarExplorer-Jacobsen'
    });
});

router.get('/:id', function(req, res, nest) {
    'use strict';
    res.render(req.params.id, {
        title: ' Angular Directive Jacobsen'
    });
});

module.exports = router;
