import axios from 'axios';

// Enhanced API URL configuration for deployment
const getApiBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    // Check for VITE_API_URL first
    const envUrl = process.env.VITE_API_URL;
    
    if (envUrl && envUrl !== 'undefined' && !envUrl.includes('VITE_API_URL=')) {
      let cleanUrl = envUrl.trim();
      
      // Fix common URL formatting issues
      if (cleanUrl.startsWith('https:/') && !cleanUrl.startsWith('https://')) {
        cleanUrl = cleanUrl.replace('https:/', 'https://');
      }
      
      // Ensure it starts with http:// or https://
      if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
        cleanUrl = 'https://' + cleanUrl;
      }
      
      // Remove any trailing slashes and ensure it ends with /api
      cleanUrl = cleanUrl.replace(/\/+$/, '');
      if (!cleanUrl.endsWith('/api')) {
        cleanUrl = cleanUrl.endsWith('/') ? cleanUrl + 'api' : cleanUrl + '/api';
      }
      
      console.log('✅ Using VITE_API_URL:', cleanUrl);
      return cleanUrl;
    }
    
    // Fallback to the deployed backend URL
    console.warn('⚠️ VITE_API_URL not set correctly, using fallback URL');
    return 'https://component-generator-cy7z.onrender.com/api';
  }
  
  // Development URL
  return 'http://localhost:5000/api';
};

const API_BASE_URL = getApiBaseUrl();

// Enhanced debug logging
console.log('🔧 API Configuration Debug:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('VITE_API_URL:', process.env.VITE_API_URL);
console.log('Final API_BASE_URL:', API_BASE_URL);
console.log('Current Origin:', window.location.origin);

// Create axios instance with enhanced configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // ✅ Needed for JWT cookies/sessions
  timeout: 10000, // 10 second timeout
});

// Enhanced request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request for debugging
    console.log('🚀 API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`,
      hasToken: !!token
    });
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Enhanced response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('🚨 API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
      code: error.code
    });
    
    // Handle specific error cases
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('🔐 Token expired, redirecting to login');
      window.location.href = '/login';
    } else if (error.code === 'ECONNABORTED') {
      console.error('⏰ Request timeout');
    } else if (error.code === 'ERR_NETWORK') {
      console.error('🌐 Network error - check if backend is running');
    }
    
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  signup: (userData) => api.post('/auth/signup', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
  updateProfile: (userData) => api.put('/auth/profile', userData),
};

// Session API calls
export const sessionAPI = {
  getAll: () => api.get('/session'),
  getById: (id) => api.get(`/session/${id}`),
  create: (sessionData) => api.post('/session', sessionData),
  update: (id, sessionData) => api.put(`/session/${id}`, sessionData),
  delete: (id) => api.delete(`/session/${id}`),
  addChatMessage: (id, messageData) => api.post(`/session/${id}/chat`, messageData),
};

// AI API calls
export const aiAPI = {
  generate: (data) => api.post('/ai/generate', data),
  chat: (data) => api.post('/ai/chat', data),
  refine: (data) => api.post('/ai/refine', data),
};

// Individual AI functions for easier imports
export const generateCode = async (data) => {
  try {
    const response = await api.post('/ai/generate', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to generate code');
  }
};

export const chatWithAI = async (data) => {
  try {
    const response = await api.post('/ai/chat', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to chat with AI');
  }
};

export const refineCode = async (data) => {
  try {
    const response = await api.post('/ai/refine', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to refine code');
  }
};

export default api; 