const Flight = require('../models/flight');

async function show(req, res){
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {title: 'Flight Details', flight});
}

function newFlight(req, res){
    res.render('flights/new', {title: 'Add flight', errorMsg: ''});
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
    Flight.find({}).sort( {departs : 1, posts: 1})
    console.log(allFlights)
}


module.exports={
    new: newFlight,
    create,
    index,
    show
}