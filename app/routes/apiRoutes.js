var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var reservationArray = require('../data/reservations.js');

var reservationList = function(req, res){
    res.json(reservationArray);
};

var newReservation = function (req, res){

};

module.exports = {
    reservationList: reservationList,
    newReservation: newReservation
}