const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/quijano';
    try {
        const conn = await mongoose.connect(mongoUri, {
            // Options can be added here if needed
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        // Do not exit the process in serverless environments like Vercel.
        throw error;
    }
};

module.exports = connectDB;