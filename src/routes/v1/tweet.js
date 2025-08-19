import express from 'express';
import { getTweets} from '../../controllers/tweetController.js'; // Assuming you have a tweet controller
import { getTweetById } from '../../controllers/tweetController.js';

const router=express.Router();


router.get('/',getTweets);
router.get('/:id', getTweetById);

// router.post('/',createTweet);





export default router;