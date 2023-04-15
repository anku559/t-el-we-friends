import { Router } from 'express';

const router = Router();

// Post CRUD
router.route('/post/:id?').post().get().put().delete();

// Like Post
router.route('/like/:id').post();

// Search Post
router.get('/search-post');

// Extra Feature
router.route('/dislike/:id').post();

export default router;
