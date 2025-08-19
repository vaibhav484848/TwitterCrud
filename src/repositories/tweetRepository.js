import Tweet from "../schema/tweet.js"

export const createTweet=async({body})=>{
    try {
        const tweet = await Tweet.create({body});
        await tweet.save();
        return tweet;
    } catch (error) {
        console.log('Error creating tweet:', error);
        throw new Error('Error creating tweet: ' + error.message);
    }
}
export const getTweets=async()=>{
    try {
        const tweets = await Tweet.find();
        return tweets;
    } catch (error) {
        throw new Error('Error fetching tweets: ' + error.message);
    }
}

export const getTweetById=async({params})=>{
    try {
        const tweet = await Tweet.findById(params.id);
        if (!tweet) {
            throw new Error('Tweet not found');
        }
        return tweet;
    } catch (error) {
        throw new Error('Error fetching tweet: ' + error.message);
    }
}