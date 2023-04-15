import { Router } from 'express';

const router = Router();

// Post CRUD
router.route('/follower').post().get().put().delete();

export default router;
