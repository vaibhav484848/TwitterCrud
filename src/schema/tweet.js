import mongoose from "mongoose";


const tweetSchema = new mongoose.Schema({
    body:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;