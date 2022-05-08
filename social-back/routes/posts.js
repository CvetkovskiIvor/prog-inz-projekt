import express from 'express';
import { getPosts, createPost, likePost, disLikePost} from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/disLikePost', auth, disLikePost);



export default router