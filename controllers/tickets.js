const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create, 
    delete: deleteTicket
};


function create(req, res) {
    req.body.flight = req.params.id
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`)
        //${req.params.id} is grabbing the above req.body.flight
    });
}

function newTicket(req, res) {
    let flightId = req.params.id
    res.render('tickets/new', {flightId})
}

function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.id, function(err, ticket) {
        res.redirect(`/flights/${ticket.flight._id}`);
    });
}