var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Angular Routes Jacobsen' });
});
router.get('/:id', function(req, res, nest) {
  res.render(req.params.id, { title: ' Angular Routes Calvert' });
});
module.exports = router;
