import express from 'express';
import { getTweets} from '../../controllers/tweetController.js'; // Assuming you have a tweet controller
import { getTweetById } from '../../controllers/tweetController.js';
import { createTweetManualValidator } from '../../validators/tweetManualValidator.js';
import { createTweet } from '../../controllers/tweetController.js'; // Assuming you have a tweet controller
// import { validate } from '../../middlewares/validate.js';
import {validate} from '../../validators/zodValidator.js';
import  tweetSchema  from '../../validators/tweetZodSchema.js'; // Assuming you have a tweet schema



const router=express.Router();


router.get('/',getTweets);
router.get('/:id', getTweetById);

router.post('/',validate(tweetSchema),createTweet);





export default router;