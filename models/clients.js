'use strict';

var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  clientID: {type: String},
  clientName: {type: String},
  clientAge: {type: String}
});

var Client = mongoose.model('Client', clientSchema);
module.exports = Client;
