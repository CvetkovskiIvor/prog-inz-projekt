import express from 'express';
import { getProfiles, getProfilesByURL, createProfile} from '../controllers/profiles.js';


const router = express.Router();

router.get('/', getProfiles);
router.get('/search', getProfilesByURL);
router.post('/', createProfile);

export default router