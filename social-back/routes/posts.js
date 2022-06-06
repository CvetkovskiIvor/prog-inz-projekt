import express from 'express';
<<<<<<< HEAD
import { getPosts, createPost, likePost, disLikePost} from '../controllers/posts.js';
import { signin, signup } from '../controllers/profiles.js';
import auth from '../middleware/auth.js';
=======
import { getPosts, getPostsByCreator, createPost, likePost, disLikePost} from '../controllers/posts.js';
>>>>>>> profile-page

const router = express.Router();

router.get('/', getPosts);
<<<<<<< HEAD
router.post('/', auth, createPost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/disLikePost', auth, disLikePost);
router.post('/signin', signin);
router.post('/signup', signup);
=======
router.get('/search', getPostsByCreator);
router.post('/', createPost);
router.patch('/:id/likePost', likePost);
router.patch('/:id/disLikePost', disLikePost);
>>>>>>> profile-page

export default router;