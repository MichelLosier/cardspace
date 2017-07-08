const express = require('express');
const root = require('./routes/root');
const roomController = require('../controllers/roomController');
const userController = require('../controllers/userController');

const router = express.Router();


// /api
router.route('/').get(root.GET);
router.route('/').post(root.POST);


// /api/room
// /api/room/*
router.get('/room', roomController.GET);
router.post('/room/create', roomController.create.POST);
router.get('/room/:id', roomController.id.GET);
router.post('/room/:id', roomController.id.POST);

// /api/user
// /api/user/*
router.get('/user', userController.GET);
router.post('/user/create', userController.create.POST);
router.get('/user/:id', userController.id.GET);
router.post('/user/:id', userController.id.POST);

module.exports = router;