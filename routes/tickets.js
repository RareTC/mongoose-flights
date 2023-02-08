const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

//GET
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
//POST
router.post('/flights/:id/tickets', ticketsCtrl.create);
router.delete('/tickets/:id', ticketsCtrl.delete);

module.exports = router;