const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: __dirname + '/.env' });

// Check if JWT_SECRET is loaded
if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not set in environment variables!');
  console.log('Available env vars:', Object.keys(process.env).filter(key => key.includes('JWT') || key.includes('MONGO') || key.includes('PORT')));
  process.exit(1);
}

// Check for OpenAI API key
if (!process.env.OPENAI_API_KEY) {
  console.warn('⚠️  OPENAI_API_KEY is not set. AI features will use mock responses.');
  console.warn('   To enable live AI, add your OpenAI API key to the .env file');
}

console.log('Environment loaded successfully');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'SET' : 'NOT SET');
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'SET' : 'NOT SET');
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'SET' : 'NOT SET');
console.log('PORT:', process.env.PORT);

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://localhost:5174', 
    'http://127.0.0.1:5173', 
    'http://127.0.0.1:5174',
    'https://your-frontend-app.vercel.app'  // We'll update this with actual URL
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const authRoutes = require('./routes/auth');
const sessionRoutes = require('./routes/session');
const aiRoutes = require('./routes/ai');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/ai', aiRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'AccioJobs Playground API is running',
    database: {
      connected: mongoose.connection.readyState === 1,
      databaseName: mongoose.connection.db?.databaseName,
      collections: Object.keys(mongoose.connection.collections)
    }
  });
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/acciojobs_playground';
    console.log('Connecting to MongoDB...');
    console.log('MongoDB URI:', mongoURI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')); // Hide credentials
    
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
    console.log('Database name:', mongoose.connection.db.databaseName);
    console.log('Connection state:', mongoose.connection.readyState);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
};

startServer(); 