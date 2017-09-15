var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();


var htmlRoutes = function(req, res){
    var chosen = req.params.route;

    if (!chosen){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    } else if(chosen === 'reservations') {
        res.sendFile(path.join(__dirname, "../public/reservations.html"));
    } else if(chosen === 'waitlist') {
        res.sendFile(path.join(__dirname, "../public/waitlist.html"));
    }
}

module.exports = htmlRoutes;