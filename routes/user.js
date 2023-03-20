import { Router } from 'express';
// import controller from '../controllers/app.js'
// import { create } from '../controllers/app.js'
import * as controller from '../controllers/user.js'
import {logginmiddleware} from '../middleware/midfun.js';
import { createmiddleware } from '../middleware/midfun.js';

const router = Router();


router.post('/create',createmiddleware, controller.create)
router.post('/login', logginmiddleware, controller.login)
router.post('/refreshToken', controller.refreshtoken)
router.delete('/logout', controller.logout)

export default router;