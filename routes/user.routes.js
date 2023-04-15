import { Router } from 'express';

const router = Router();

// Register
router.post('/register');

// Login - JWT Receive
router.post('/login');

// View and Edit Profile
router.route('/profile').get().put();

// Search User
router.get('/search-user');

export default router;
