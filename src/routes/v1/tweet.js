import express from 'express';

const router=express.Router();


router.get('', (req, res) => {
    
    res.json({
        message: 'Welcome to the Tweet API V1'
    });
});

router.get('/:id', (req, res) => {
    const tweetId = req.params.id;
    // Here you would typically fetch the tweet from a database
    res.json({
        message: `Fetching tweet with ID V1: ${tweetId}`
    });
});




export default router;