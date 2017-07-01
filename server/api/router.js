const express = require('express');
const root = require('./routes/root');
const room = require('./routes/room')

const router = express.Router();


// /api
router.route('/').get(root.GET);
router.route('/').post(root.POST);


// /api/room
// /api/room/*
router.route('/room').get(room.GET);
router.route('/room/create').post(room.create.POST);
router.route('/room/:id').get(room.id.GET);
router.route('/room/:id').post(room.id.POST);

module.exports = router;