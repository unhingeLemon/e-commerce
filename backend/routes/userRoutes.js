import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfle,
  registerUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.post('/', registerUser);
router.route('/profile').get(protect, getUserProfle);

export default router;
