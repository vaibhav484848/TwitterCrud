export const createTweetManualValidator = (req, res, next) => {
    if(!req.body || !req.body.tweet){
        return res.status(400).json({
            error: 'Tweet content is required'
        });
    }
    next();
}