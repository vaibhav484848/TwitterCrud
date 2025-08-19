import { createTweet as createTweetService} from '../services/tweetService.js';

export const getTweets=(req,res)=>{
    res.json({
        message: 'Welcome to the Tweet API V1'
    });
}
export const getTweetById=(req,res)=>{
    const tweetId = req.params.id;
    // Here you would typically fetch the tweet from a database
    res.json({
        message: `Fetching tweet with ID V1: ${tweetId}`
    });
}
export const createTweet=async (req,res)=>{
    try{

        const tweetData = await createTweetService(req.body);
    // Here you would typically save the tweet to a database
        res.status(201).json({
            message: 'Tweet created successfully',
            data: tweetData
        });

    }
    catch(error){
        if(error.status){
            res.status(error.status).json({
                error: error.message,
                success: false,
            });
            return;
        }
        return res.status(500).json({
            error: 'Internal Server Error',
            success: false,
        });
        return;
    }
    
}