'use strict';

var express = require('express');
var router = express.Router();

router.use('/clients', require('./clients') );

module.exports = router;
