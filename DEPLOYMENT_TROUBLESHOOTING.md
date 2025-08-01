# Deployment Troubleshooting Guide

## Signup Page Issues

If the signup page is not working in deployment, follow these steps to identify and fix the issue:

### 1. Check Environment Variables

Make sure these environment variables are set in your deployment platform:

**Frontend (Vercel/Netlify):**
```bash
VITE_API_URL=https://component-generator-cy7z.onrender.com
NODE_ENV=production
```

**Backend (Render/Railway):**
```bash
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### 2. Test API Connectivity

Visit these URLs to test if your backend is working:

- Health Check: `https://component-generator-cy7z.onrender.com/api/health`
- CORS Test: `https://component-generator-cy7z.onrender.com/api/cors-test`

### 3. Check Browser Console

Open browser developer tools and check for:
- CORS errors
- Network request failures
- JavaScript errors

### 4. Common Issues and Solutions

#### CORS Errors
**Problem:** `Access to fetch at '...' from origin '...' has been blocked by CORS policy`

**Solution:** 
- Ensure your frontend URL is in the allowed origins list
- Check that `credentials: true` is set in CORS configuration
- Verify `sameSite: 'none'` and `secure: true` for cookies in production

#### Network Errors
**Problem:** `Failed to fetch` or `ERR_NETWORK`

**Solution:**
- Check if backend is running and accessible
- Verify API URL is correct
- Ensure no firewall blocking requests

#### Cookie Issues
**Problem:** Cookies not being set or received

**Solution:**
- Ensure `httpOnly: true` and `secure: true` in production
- Check `sameSite: 'none'` for cross-origin requests
- Verify `withCredentials: true` in frontend requests

### 5. Debug Steps

1. **Test API directly:**
   ```bash
   curl -X POST https://component-generator-cy7z.onrender.com/api/test-signup \
     -H "Content-Type: application/json" \
     -d '{"test": true}'
   ```

2. **Check backend logs** in your hosting platform

3. **Use the debug tools** in the signup page (development mode only)

### 6. Environment-Specific Fixes

#### Vercel Deployment
- Set environment variables in Vercel dashboard
- Ensure `VITE_API_URL` is correctly set
- Check build logs for any errors

#### Render Deployment
- Verify environment variables are set
- Check if the service is running
- Monitor logs for errors

### 7. Quick Fixes

If the signup page is completely broken:

1. **Clear browser cache and cookies**
2. **Try in incognito/private mode**
3. **Check if other pages work**
4. **Verify backend is responding**

### 8. Contact Support

If issues persist:
1. Check backend logs for specific error messages
2. Test with the provided debug endpoints
3. Verify all environment variables are set correctly
4. Ensure MongoDB connection is working

## Recent Changes Made

The following improvements have been made to fix deployment issues:

1. **Enhanced API Configuration** (`frontend/src/utils/api.js`)
   - Better error handling and logging
   - Improved environment variable handling
   - Enhanced request/response interceptors

2. **Improved CORS Configuration** (`backend/server.js`)
   - More flexible origin checking
   - Better error logging for CORS issues
   - Enhanced cookie settings

3. **Enhanced Signup Route** (`backend/routes/auth.js`)
   - Better validation and error handling
   - Improved logging for debugging
   - Enhanced cookie configuration

4. **Debug Tools** (`frontend/src/pages/Signup.jsx`)
   - API connectivity testing
   - Debug information display
   - Enhanced error logging 