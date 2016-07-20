'use strict';

var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({

  clientID: {type: String},
  clientName: {type: String},
  clientAge: {type: number}

});

var Client = mongoose.model('Client', clientSchema);
moduel.exports = Client;
