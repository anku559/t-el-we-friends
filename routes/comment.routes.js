import { Router } from 'express';

const router = Router();

router.route('/comment/:id?').post().get().put().delete();

export default router;
