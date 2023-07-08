const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render('flights/show', { title: 'Flight Details', flight, tickets });
  }

function newFlight(req, res){
    res.render('flights/new', {errorMsg: ''});
};

async function create(req, res){
    try{
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', {errorMsg: err.message});
    }
}

async function index(req, res) {
    const allFlights = await Flight.find({}).sort({departs: 1})
    res.render('flights/index', {flights: allFlights})
}


module.exports={
    new: newFlight,
    create,
    index,
    show
}