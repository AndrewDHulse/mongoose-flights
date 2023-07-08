const Ticket= require('../models/ticket');
const Flight= require('../models/flight');


async function newTicket(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        const flights = await Flight.find();
        res.render('tickets/new', { flight: flight, flights: flights });
    } catch (err) {
        console.log(err);
    }
}

async function create(req, res) {
    const flightId = req.params.id;
    req.body.flight = flightId;
    try{
        const ticket = await Ticket.create(req.body)
        res.redirect(`/flights/${flightId}`);
    } catch(err) {
        console.log(err)
    }
}

module.exports={
    create,
    new: newTicket,
}