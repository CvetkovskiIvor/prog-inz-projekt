import express from 'express';

import { getPostsBySearch, getPosts, getPost, commentPost, getPostsByCreator, createPost, likePost, disLikePost} from '../controllers/posts.js';
import { signin, signup } from '../controllers/profiles.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/creator', getPostsByCreator);
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/disLikePost', auth, disLikePost);
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/:id/commentPost', commentPost);


export default router;