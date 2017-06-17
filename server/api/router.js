var express = require('express');
var router = express.Router();
var routesRoot = require('./routesRoot.js');


//localhost:8080/api/..
router.route('/').get(routesRoot.GET);
router.route('/').post(routesRoot.POST);

module.exports = router;