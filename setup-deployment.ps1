# AccioJobs Playground Deployment Setup Script
# This script helps prepare your project for deployment

Write-Host "🚀 AccioJobs Playground Deployment Setup" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "❌ Git repository not found. Please initialize git first:" -ForegroundColor Red
    Write-Host "   git init" -ForegroundColor Yellow
    Write-Host "   git add ." -ForegroundColor Yellow
    Write-Host "   git commit -m 'Initial commit'" -ForegroundColor Yellow
    Write-Host "   git remote add origin <your-github-repo-url>" -ForegroundColor Yellow
    Write-Host "   git push -u origin main" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Git repository found" -ForegroundColor Green

# Check if .env files exist
$backendEnv = "backend/.env"
$frontendEnv = "frontend/.env.local"

if (Test-Path $backendEnv) {
    Write-Host "✅ Backend .env file found" -ForegroundColor Green
} else {
    Write-Host "⚠️  Backend .env file not found" -ForegroundColor Yellow
    Write-Host "   Create backend/.env with the following variables:" -ForegroundColor Cyan
    Write-Host "   NODE_ENV=development" -ForegroundColor White
    Write-Host "   PORT=5000" -ForegroundColor White
    Write-Host "   JWT_SECRET=your-secret-key" -ForegroundColor White
    Write-Host "   MONGO_URI=your-mongodb-uri" -ForegroundColor White
    Write-Host "   GEMINI_API_KEY=your-gemini-key" -ForegroundColor White
}

if (Test-Path $frontendEnv) {
    Write-Host "✅ Frontend .env.local file found" -ForegroundColor Green
} else {
    Write-Host "⚠️  Frontend .env.local file not found" -ForegroundColor Yellow
    Write-Host "   Create frontend/.env.local with:" -ForegroundColor Cyan
    Write-Host "   VITE_API_URL=http://localhost:5000/api" -ForegroundColor White
}

# Check package.json files
$backendPackage = "backend/package.json"
$frontendPackage = "frontend/package.json"

if (Test-Path $backendPackage) {
    Write-Host "✅ Backend package.json found" -ForegroundColor Green
} else {
    Write-Host "❌ Backend package.json not found" -ForegroundColor Red
    exit 1
}

if (Test-Path $frontendPackage) {
    Write-Host "✅ Frontend package.json found" -ForegroundColor Green
} else {
    Write-Host "❌ Frontend package.json not found" -ForegroundColor Red
    exit 1
}

# Check if node_modules exist
if (Test-Path "backend/node_modules") {
    Write-Host "✅ Backend dependencies installed" -ForegroundColor Green
} else {
    Write-Host "⚠️  Backend dependencies not installed" -ForegroundColor Yellow
    Write-Host "   Run: cd backend && npm install" -ForegroundColor Cyan
}

if (Test-Path "frontend/node_modules") {
    Write-Host "✅ Frontend dependencies installed" -ForegroundColor Green
} else {
    Write-Host "⚠️  Frontend dependencies not installed" -ForegroundColor Yellow
    Write-Host "   Run: cd frontend && npm install" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "📋 Deployment Checklist:" -ForegroundColor Green
Write-Host "=======================" -ForegroundColor Green
Write-Host "1. ✅ Code pushed to GitHub repository" -ForegroundColor White
Write-Host "2. ⏳ Create MongoDB Atlas database" -ForegroundColor Yellow
Write-Host "3. ⏳ Get Google Gemini API key (optional)" -ForegroundColor Yellow
Write-Host "4. ⏳ Deploy backend to Render" -ForegroundColor Yellow
Write-Host "5. ⏳ Deploy frontend to Vercel" -ForegroundColor Yellow
Write-Host "6. ⏳ Update environment variables" -ForegroundColor Yellow
Write-Host "7. ⏳ Test deployment" -ForegroundColor Yellow

Write-Host ""
Write-Host "🔗 Useful Links:" -ForegroundColor Green
Write-Host "===============" -ForegroundColor Green
Write-Host "• Render: https://render.com" -ForegroundColor Cyan
Write-Host "• Vercel: https://vercel.com" -ForegroundColor Cyan
Write-Host "• MongoDB Atlas: https://cloud.mongodb.com" -ForegroundColor Cyan
Write-Host "• Google AI Studio: https://aistudio.google.com/app/apikey" -ForegroundColor Cyan

Write-Host ""
Write-Host "📖 Next Steps:" -ForegroundColor Green
Write-Host "=============" -ForegroundColor Green
Write-Host "1. Follow the DEPLOYMENT.md guide" -ForegroundColor White
Write-Host "2. Set up MongoDB Atlas database" -ForegroundColor White
Write-Host "3. Deploy backend to Render first" -ForegroundColor White
Write-Host "4. Deploy frontend to Vercel" -ForegroundColor White
Write-Host "5. Update environment variables" -ForegroundColor White

Write-Host ""
Write-Host "🎉 Ready for deployment!" -ForegroundColor Green 