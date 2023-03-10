var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');



// GET /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
// GET /flights/:id (show functionality)
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);

module.exports = router;