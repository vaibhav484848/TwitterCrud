import { Filter } from "bad-words"

import { createTweet as createTweetRepository } from "../repositories/tweetRepository.js";

const filter = new Filter();


export const createTweet = async ({body}) => {
    console.log('Creating tweet with body:', body);

    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        // throw new Error('Tweet contains inappropriate content');
        throw {
            status: 400,
            message: 'Tweet contains inappropriate content'
        }
    }
    console.log("logger hun");

    const tweet=await createTweetRepository({body});

    return tweet;


}
