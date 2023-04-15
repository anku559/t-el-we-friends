import { Router } from 'express';
import UserAuthentication from '../controllers/UserAuth.js';
import uploadFiles from '../helpers/third-party/multi-parts.js';

const router = Router();

// Register
router.post(
  '/register',
  uploadFiles('uploads/temp').fields([
    { name: 'coverImage', maxCount: 1 },
    { name: 'profileImage', maxCount: 1 },
  ]),
  UserAuthentication.registerUser,
);

// Login - JWT Receive
router.post('/login');

// View and Edit Profile
router.route('/profile').get().put();

// Search User
router.get('/search-user');

export default router;
