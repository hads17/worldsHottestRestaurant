// require node packages
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

// require route functions
var htmlRoutes = require('./app/routes/htmlRoutes.js');
var apiRoutes = require('./app/routes/apiRoutes.js');
var waitlistArray = require('./app/data/waitlist.js');

// sets up express
var app = express();
var PORT = process.env.PORT || 6969;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, "app/public")))

// getting html routes
app.get('/:route?', function(req, res){
    htmlRoutes(req, res);
});

// getting reservation JSON
app.get('/api/reservation', function(req, res){
    apiRoutes.reservationList(req, res);
});

// getting waitlist JSON
app.post('/api/new', function(req, res){
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    waitlistArray.push(newReservation);

    res.json(newReservation);
});

// listens for anything on the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});