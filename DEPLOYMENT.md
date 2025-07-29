# Deployment Guide - AccioJobs Playground

This guide will help you deploy your AccioJobs Playground application with the backend on Render and frontend on Vercel.

## Prerequisites

1. **GitHub Repository**: Your code should be pushed to a GitHub repository
2. **MongoDB Atlas**: A cloud MongoDB database (free tier available)
3. **Google Gemini API Key**: For AI functionality (optional - app works with mock responses)
4. **GitHub Account**: For connecting to deployment platforms

## Step 1: Deploy Backend to Render

### 1.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Click "New +" and select "Web Service"

### 1.2 Connect Your Repository
1. Connect your GitHub repository
2. Select the repository containing your AccioJobs project
3. Configure the service:
   - **Name**: `acciojobs-backend` (or your preferred name)
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid if needed)

### 1.3 Set Environment Variables
In Render dashboard, go to your service → Environment → Add Environment Variables:

```
NODE_ENV=production
PORT=10000
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/acciojobs?retryWrites=true&w=majority
GEMINI_API_KEY=your-gemini-api-key-here
FRONTEND_URL=https://your-frontend-app.vercel.app
```

**Important Notes:**
- Replace `your-super-secret-jwt-key-here-make-it-long-and-random` with a strong random string
- Replace the MongoDB URI with your actual MongoDB Atlas connection string
- Replace `your-gemini-api-key-here` with your Google Gemini API key
- Replace `your-frontend-app.vercel.app` with your actual Vercel frontend URL (we'll get this in step 2)

### 1.4 Deploy
1. Click "Create Web Service"
2. Render will automatically build and deploy your backend
3. Wait for deployment to complete (usually 2-5 minutes)
4. Note your backend URL: `https://your-app-name.onrender.com`

## Step 2: Deploy Frontend to Vercel

### 2.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"

### 2.2 Import Your Repository
1. Import your GitHub repository
2. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 2.3 Set Environment Variables
In Vercel dashboard, go to your project → Settings → Environment Variables:

```
VITE_API_URL=https://your-backend-app.onrender.com/api
```

Replace `your-backend-app.onrender.com` with your actual Render backend URL from Step 1.

### 2.4 Deploy
1. Click "Deploy"
2. Vercel will build and deploy your frontend
3. Wait for deployment to complete (usually 1-3 minutes)
4. Note your frontend URL: `https://your-app-name.vercel.app`

## Step 3: Update Backend CORS Settings

After getting your Vercel frontend URL, update your Render backend:

1. Go to your Render backend service
2. Navigate to Environment → Environment Variables
3. Update `FRONTEND_URL` with your actual Vercel URL:
   ```
   FRONTEND_URL=https://your-app-name.vercel.app
   ```
4. Redeploy the backend (Render will auto-redeploy when you save environment variables)

## Step 4: Test Your Deployment

### 4.1 Test Backend
Visit your backend health endpoint:
```
https://your-backend-app.onrender.com/api/health
```

You should see a JSON response with status information.

### 4.2 Test Frontend
1. Visit your Vercel frontend URL
2. Test the following features:
   - User registration and login
   - AI Playground functionality
   - Navigation between pages
   - Responsive design

### 4.3 Test API Integration
1. Open browser developer tools
2. Go to Network tab
3. Try logging in or using the AI Playground
4. Verify that API calls are going to your Render backend

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure `FRONTEND_URL` is correctly set in Render backend
   - Check that the URL includes `https://` protocol
   - Redeploy backend after updating environment variables

2. **MongoDB Connection Issues**
   - Verify your MongoDB Atlas connection string
   - Ensure your IP is whitelisted in MongoDB Atlas (or use 0.0.0.0/0 for all IPs)
   - Check that the database name is correct

3. **Environment Variables Not Loading**
   - Ensure all environment variables are set in Render
   - Check for typos in variable names
   - Redeploy after adding/updating variables

4. **Build Failures**
   - Check the build logs in Render/Vercel
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

### Debugging Commands

Test your backend API:
```bash
curl https://your-backend-app.onrender.com/api/health
```

Test your frontend:
```bash
curl https://your-frontend-app.vercel.app
```

## Environment Variables Reference

### Backend (Render)
```
NODE_ENV=production
PORT=10000
JWT_SECRET=your-super-secret-jwt-key
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/acciojobs
GEMINI_API_KEY=your-gemini-api-key
FRONTEND_URL=https://your-frontend-app.vercel.app
```

### Frontend (Vercel)
```
VITE_API_URL=https://your-backend-app.onrender.com/api
```

## Security Notes

1. **JWT Secret**: Use a strong, random string for JWT_SECRET
2. **MongoDB**: Use environment variables for database credentials
3. **API Keys**: Never commit API keys to your repository
4. **CORS**: Only allow your frontend domain in CORS settings

## Cost Considerations

- **Render Free Tier**: 750 hours/month, auto-sleeps after 15 minutes of inactivity
- **Vercel Free Tier**: Unlimited deployments, 100GB bandwidth/month
- **MongoDB Atlas Free Tier**: 512MB storage, shared clusters

## Support

If you encounter issues:
1. Check the deployment logs in Render/Vercel
2. Verify all environment variables are set correctly
3. Test your API endpoints directly
4. Check browser console for frontend errors

Your AccioJobs Playground should now be fully deployed and accessible online! 🚀 