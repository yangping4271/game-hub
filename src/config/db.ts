import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    const mongoURI = process.env.MONGODB_URI.trim();
    console.log('Attempting to connect to MongoDB Atlas...');
    
    if (!mongoURI.startsWith('mongodb://') && !mongoURI.startsWith('mongodb+srv://')) {
      throw new Error('Invalid MongoDB URI format. URI must start with mongodb:// or mongodb+srv://');
    }

    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // 超时时间
      socketTimeoutMS: 45000, // 套接字超时
    });

    console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    process.exit(1);
  }
};

export default connectDB; 

