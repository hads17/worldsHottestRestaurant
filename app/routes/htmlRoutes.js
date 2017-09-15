var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();


var htmlRoutes = function(req, res){
    var chosen = req.params.route;

    if (!chosen){
        res.sendFile(path.join(__dirname, "index.html"));
    } else if(chosen === 'reservations') {
        res.sendFile(path.join(__dirname, "reservations.html"));
    } else if(chosen === 'waitlist') {
        res.sendFile(path.join(__dirname, "waitlist.html"));
    }
}

module.exports = htmlRoutes;