const Flight = require('../models/flight');

function newFlight(req, res){
    res.render('flights/new', {errorMsg: ''});
};

async function create(req, res){
    try{
        await Flight.create(req.body);
        res.redirect('flights/new');
    } catch (err) {
        console.log(err);
        res.render('flights/new', {errorMsg: err.message});
    }
}

async function index(req, res){
    const allFlights= await Flight.find({});
    res.render('flights/index', {flights: allFlights})
    console.log(allFlights)
}

module.exports={
    new: newFlight,
    create,
    index,
}