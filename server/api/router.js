var express = require('express');
var router = express.Router();


var root = require('./routes/root.js');
var room = require('./routes/room.js')


//localhost:8080/api/..
router.route('/').get(root.GET);
router.route('/').post(root.POST);


//Room route
router.route('/room').get(room.GET);
router.route('/room/create').post(room.create.POST);
router.route('/room/:id').get(room.id.GET);
router.route('/room/:id').post(room.id.POST);

module.exports = router;