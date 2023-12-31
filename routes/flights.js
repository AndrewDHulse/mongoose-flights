var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

//get /flights
router.get('/', flightsCtrl.index);
//get flights/new
router.get('/new', flightsCtrl.new);
//get flights/:id
router.get('/:id', flightsCtrl.show);
//post /flights
router.post('/', flightsCtrl.create);

module.exports = router;
