const Flight = require('../models/flight');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    flights.sort((first, second) => first.departs - second.departs)
    res.render('flights/index', { flights, title: 'Flights Index' });
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Flight Details', flight });
  });
}

function newFlight(req, res) {
  res.render('flights/new');
}

function create(req, res) {
  // Convert nowShowing's checkbox to a boolean
  req.body.nowFlying = !!req.body.nowFlying;
  // Remove leading/trailing spaces
  // req.body.cast = req.body.cast.trim();
  // if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key];
  // }
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    res.redirect('/flights');
  });
}
