import express from 'express';

import tweetRouter from '../v1/tweet.js'; // Assuming you have a tweet router
import commentRouter from '../v1/comment.js'; // Assuming you have a comment router

const router = express.Router();

router.get('/tweets', tweetRouter);
router.get('/comments', commentRouter);

export default router;