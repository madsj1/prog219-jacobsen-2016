var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week07-SolarExplorer-Jacobsen'
    });
});

router.get('/:id', function(req, res, nest) {
    'use strict';
    res.render(req.params.id, {
        title: ' Angular Directive Jacobsen'
    });
});

router.get('/renewables/:id', function(request, response, next) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: ' Angular Directive jacobsen'
    });
});

module.exports = router;
