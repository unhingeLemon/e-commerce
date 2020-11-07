import express from 'express';
const router = express.Router();
import { authUser, getUserProfle } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfle);

export default router;
