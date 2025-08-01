const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser()); // ✅ Parse cookies for JWT authentication

// ✅ Enhanced CORS configuration for deployment
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000',
      'https://component-generator-three.vercel.app',
      'https://component-generator.vercel.app',
      process.env.FRONTEND_URL
    ].filter(Boolean).map(url => url.replace(/\/$/, '')); // Remove trailing slashes
    
    // Check if origin is allowed
    if (allowedOrigins.includes(origin) || allowedOrigins.some(allowed => origin.startsWith(allowed))) {
      callback(null, true);
    } else {
      console.log('🚫 CORS blocked origin:', origin);
      console.log('✅ Allowed origins:', allowedOrigins);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true, // Needed for JWT cookies/sessions
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Log environment variables for debugging
console.log('Environment Variables:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not set');
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Set' : 'Not set');
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'Set' : 'Not set');
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'Set' : 'Not set');
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const authRoutes = require('./routes/auth');
const sessionRoutes = require('./routes/session');
const aiRoutes = require('./routes/ai');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/session', sessionRoutes);
app.use('/api/ai', aiRoutes);

// Route debugging endpoint
app.get('/api/routes', (req, res) => {
  const routes = [];
  
  // Get all registered routes
  app._router.stack.forEach(middleware => {
    if (middleware.route) {
      // Routes registered directly on the app
      const path = middleware.route.path;
      const methods = Object.keys(middleware.route.methods);
      routes.push({ path, methods });
    } else if (middleware.name === 'router') {
      // Router middleware
      middleware.handle.stack.forEach(handler => {
        if (handler.route) {
          const path = middleware.regexp.source.replace('^\\/','').replace('\\/?(?=\\/|$)','');
          const fullPath = `/api/${path}${handler.route.path}`;
          const methods = Object.keys(handler.route.methods);
          routes.push({ path: fullPath, methods });
        }
      });
    }
  });
  
  res.json({
    message: 'Available routes',
    routes: routes,
    timestamp: new Date().toISOString()
  });
});

// Enhanced health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    const collections = await mongoose.connection.db.listCollections().toArray();
    
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: dbStatus,
      collections: collections.map(col => col.name),
      environment: process.env.NODE_ENV || 'development',
      cors: {
        origin: req.headers.origin,
        allowedOrigins: [
          'http://localhost:5173',
          'http://localhost:5174',
          'http://localhost:3000',
          'https://component-generator-three.vercel.app',
          'https://component-generator.vercel.app',
          process.env.FRONTEND_URL
        ].filter(Boolean).map(url => url.replace(/\/$/, '')) // Remove trailing slashes
      },
      cookies: {
        enabled: true,
        secure: process.env.NODE_ENV === 'production'
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// Signup test endpoint
app.post('/api/test-signup', (req, res) => {
  console.log('🧪 Test signup endpoint called');
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('Origin:', req.headers.origin);
  
  res.json({
    success: true,
    message: 'Test signup endpoint working',
    receivedData: {
      headers: req.headers,
      body: req.body,
      origin: req.headers.origin,
      timestamp: new Date().toISOString()
    }
  });
});

// CORS test endpoint
app.get('/api/cors-test', (req, res) => {
  res.json({
    message: 'CORS is working!',
    origin: req.headers.origin,
    timestamp: new Date().toISOString()
  });
});

// Quick test endpoint
app.get('/api/ping', (req, res) => {
  res.json({
    message: 'pong',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Component Generator Backend API',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  
  if (!process.env.OPENAI_API_KEY && !process.env.GEMINI_API_KEY) {
    console.warn('⚠️  Warning: No AI API keys configured. AI features will use mock responses.');
  }
}); 
