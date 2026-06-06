const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/quijano';

    if (!process.env.MONGO_URI && process.env.VERCEL) {
        const error = new Error(
            'Missing MONGO_URI environment variable in Vercel. Set MONGO_URI in Vercel project settings to your MongoDB Atlas URI.'
        );
        console.error(error.message);
        throw error;
    }

    try {
        const conn = await mongoose.connect(mongoUri, {
            // Options can be added here if needed
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        throw error;
    }
};

module.exports = connectDB;