const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
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
  const movie = new Flight(req.body);
  movie.save(function(err) {
    if (err) return res.redirect('/flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}
