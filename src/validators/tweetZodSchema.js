import {z} from 'zod';

const tweetZodSchema = z.object({
    body:z.string().min(1).max(280)

});

export default tweetZodSchema;