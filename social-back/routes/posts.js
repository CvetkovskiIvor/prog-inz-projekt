import express from 'express';
import { getPosts, getPostsByCreator, createPost, likePost, disLikePost} from '../controllers/posts.js';


const router = express.Router();

router.get('/', getPosts);
router.get('/search', getPostsByCreator);
router.post('/', createPost);
router.patch('/:id/likePost', likePost);
router.patch('/:id/disLikePost', disLikePost);



export default router