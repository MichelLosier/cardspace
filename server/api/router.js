const express = require('express');
const root = require('./routes/root');
const room = require('./routes/room')
const gameCtlr = require('../controllers/gameController')

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

// /api/games
// /api/games/*

//games GET
router.get('/games', gameCtlr.getAllGames);
router.get('/games/id/:_id', gameCtlr.getGame);

//games POST
router.post('/games', gameCtlr.createGame);
//games PATCH
//games DELETE
module.exports = router;