import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('strictQuery', true);  // Suppress the deprecation warning

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    // Make sure your username and password do not contain special characters that need encoding
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.ks58j.mongodb.net/?retryWrites=true&w=majority&appName=mern-todo`;

    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000 // Increased timeout to 10 seconds
    });

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database:', error.message);
    });
};

export default Connection;
