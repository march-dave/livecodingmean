'use strict';

var express = require('express');
var router = express.Router();
var Client = require('../models/clients');

// get
router.get('/', (req, res) => {
  Client.find({}, (err,  properties) => {
    res.status(err ? 400 : 200).send( err || properties);

    console.log('properties', properties);

  });
});

// post
router.post('/', (req, res) => {

  // console.log('req.body', req.body);
  var client = new Client(req.body);

  console.log('client', client);

  client.save( (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);

    // console.log('properties', properties);
  });
})

// put
router.put('/:id', (req, res) => {

  Client.findByIdAndUpdate(req.param.id, {$set: req.body}, {new: true}, (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);
  });
})

//delete
router.delete('/:id', (req, res) => {

  Client.findByIdAndRemove(req.param.id, (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);
  })

});

module.exports = router;
