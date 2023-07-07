const express = require('express');
const router = express.Router();
const destinationsCtrl= require('../controllers/destinations');


//post flights/:id/destinations to create destination for flights
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports=router; 