import express from 'express';
import { getCommunities , createCommunity } from '../controllers/communities.js';


const router = express.Router();

router.get('/', getCommunities);
router.post('/', createCommunity);

export default router