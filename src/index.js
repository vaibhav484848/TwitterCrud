import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import tweetRouter from './routes/v1/tweet.js';
import apiRouter from './routes/apiRoutes.js';
import connectDB from './config/dbConfig.js';
// import {connectDB} from './config/dbConfig.js';


const app=express();

app.use(morgan('combined'));

app.use(express.json());
app.use(express.urlencoded()); 


app.use('/api',apiRouter);



app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.get('/ping',(req,res)=>{
    console.log(req.query);
    return res.status(200).json({
        message: 'Pong!',
        name:req.query.name
    });
    res.send('Pong!');
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
