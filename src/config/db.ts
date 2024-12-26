import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }
    console.log('Attempting to connect to MongoDB Atlas...');
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB; 

