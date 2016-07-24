'use strict';

var express = require('express');
var router = express.Router();
var Client = require('../models/clients');

// get
router.get('/', (req, res) => {
  Client.find({}, (err,  properties) => {
    res.status(err ? 400 : 200).send( err || properties);
  });
});

//get by Id
router.get('/:id', (req, res) => {
  // client.findById(req.params.id, (err, cls) => {
  //   res.status(err ? 400 : 200).send(err || cls);
  // });
});


// post
router.post('/', (req, res) => {
  var client = new Client(req.body);
  client.save( (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);
  });
})

// put
router.put('/:id', (req, res) => {
  Client.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);
  });
})

//delete
router.delete('/:id', (req, res) => {
  Client.findByIdAndRemove(req.params.id, (err, properties) => {
    res.status(err ? 400 : 200).send(err || properties);
  })

});

module.exports = router;
