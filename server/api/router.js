import { express } from 'express';
import { rootRoutes } as root from './routes/root';
import { roomRoutes } as room from './routes/room';

var router = express.Router();


// /api
router.route('/').get(root.GET);
router.route('/').post(root.POST);


// /api/room
// /api/room/*
router.route('/room').get(room.GET);
router.route('/room/create').post(room.create.POST);
router.route('/room/:id').get(room.id.GET);
router.route('/room/:id').post(room.id.POST);

export {router}