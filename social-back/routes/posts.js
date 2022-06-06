import express from 'express';

import { getPostsBySearch, getPosts, getPostsByCreator, createPost, likePost, disLikePost} from '../controllers/posts.js';
import { signin, signup } from '../controllers/profiles.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/creator', getPostsByCreator);
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/disLikePost', auth, disLikePost);
router.post('/signin', signin);
router.post('/signup', signup);

export default router;