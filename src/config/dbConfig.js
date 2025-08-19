import mongoose from 'mongoose';
import { MONGO_URL } from './serverConfig.js';

export default async function connectDB() {
    try{
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.error('MongoDB connection failed:', error);
       
    }
}
// export const connectDB = async () => {
//     try {
//         console.log('Attempting to connect to MongoDB...');
//         console.log('MongoDB URL:', MONGO_URL); // Log the connection string for debugging
//         await mongoose.connect(MONGO_URL);
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('MongoDB connection failed:', error.message);
//         console.error('Full error:', error); // Log the full error for more details
//         process.exit(1); // Exit the process if the connection fails
//     }
// };