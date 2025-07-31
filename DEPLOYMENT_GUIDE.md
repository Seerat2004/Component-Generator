# Component Generator - Deployment Guide

## 🔧 Issues Fixed

1. **API URL Formatting**: Fixed malformed URLs in frontend API configuration
2. **CORS Configuration**: Cleaned up to only include the correct Vercel domain
3. **Debug Logging**: Added console logs to help identify issues

## 🚀 Manual Deployment Steps

### Frontend (Vercel)

1. **Push your frontend changes to your Vercel repository**
2. **Set Environment Variable in Vercel Dashboard**:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://component-generator-cy7z.onrender.com/api`
   - Deploy the changes

### Backend (Render)

1. **Upload your backend changes to Render**:
   - Go to your Render dashboard
   - Navigate to your backend service
   - Upload the updated `backend/server.js` file
   - Or connect your GitHub repository and push the changes

## 📋 Files Modified

### Frontend
- `frontend/src/utils/api.js` - Fixed API URL formatting and added debug logging

### Backend  
- `backend/server.js` - Cleaned up CORS configuration to only include:
  - `http://localhost:5173` (development)
  - `http://localhost:5174` (development)
  - `https://component-generator-three.vercel.app` (production)
  - `process.env.FRONTEND_URL` (environment variable)

## 🔍 Testing

After deployment:

1. **Check Browser Console** for debug logs:
   ```
   🔧 API Configuration Debug:
   NODE_ENV: production
   VITE_API_URL: https://component-generator-cy7z.onrender.com/api
   Final API_BASE_URL: https://component-generator-cy7z.onrender.com/api
   ```

2. **Test Login/Signup** functionality
3. **Check Network Tab** to ensure requests go to the correct URL

## 🆘 Troubleshooting

If you still get CORS errors:
1. Verify the frontend URL in Vercel matches exactly: `https://component-generator-three.vercel.app`
2. Check that the backend is deployed with the latest CORS configuration
3. Clear browser cache and try again 