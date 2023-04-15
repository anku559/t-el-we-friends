import { Router } from 'express';

const router = Router();

// Post CRUD
router.route('/friend').post().get().put().delete();

export default router;
