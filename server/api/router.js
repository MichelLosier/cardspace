const express = require('express');
const root = require('./routes/root');
const gameCtlr = require('../controllers/gameController')
const roomController = require('../controllers/roomController');
const userController = require('../controllers/userController');
const rootController = require('../controllers/rootController');

const router = express.Router();

//Do initial authentication with middleware authentication function
router.use(rootController.authenticateUser);

// /api
router.route('/').get(root.GET);
router.route('/').post(root.POST);

// /api/room
// /api/room/*
router.get('/room', roomController.GET);
router.post('/room/create', roomController.create.POST);
router.get('/room/:id', roomController.id.GET);
router.post('/room/:id', roomController.id.POST);
router.patch('/room/:id', roomController.id.PATCH);

// /api/user
// /api/user/*
router.get('/user', userController.GET);
router.post('/user/create', userController.create.POST);
router.get('/user/:id', userController.id.GET);
router.post('/user/:id', userController.id.POST);

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