import { Router } from 'express';
import controller from '../controllers/app.js'
const router = Router();




router.post('/create',controller.create)
router.post('/login',controller.login)
router.post('/refreshToken',controller.refreshtoken )
router.delete('/logout',controller.logout) 




export default router;