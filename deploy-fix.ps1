# Component Generator - Fix Login/Signup Issues
Write-Host "🔧 Fixing Login/Signup Issues..." -ForegroundColor Green

# Navigate to backend directory
Set-Location backend

Write-Host "📁 Current directory: $(Get-Location)" -ForegroundColor Yellow

# Check if git is available
try {
    git --version | Out-Null
    Write-Host "✅ Git is available" -ForegroundColor Green
    
    # Add all changes
    Write-Host "➕ Adding changes..." -ForegroundColor Cyan
    git add .
    
    # Commit changes
    Write-Host "💾 Committing changes..." -ForegroundColor Cyan
    git commit -m "Fix CORS configuration and API URL issues"
    
    # Push to remote
    Write-Host "🚀 Pushing to Render..." -ForegroundColor Cyan
    git push
    
    Write-Host "✅ Backend deployment initiated!" -ForegroundColor Green
    Write-Host "⏳ Wait 2-3 minutes for Render to deploy the changes" -ForegroundColor Yellow
    
} catch {
    Write-Host "❌ Git not available or repository not configured" -ForegroundColor Red
    Write-Host "Please manually deploy the backend changes to Render" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🔧 Frontend Changes Made:" -ForegroundColor Cyan
Write-Host "✅ Fixed API URL formatting in frontend/src/utils/api.js" -ForegroundColor Green
Write-Host "✅ Added debug logging to help identify issues" -ForegroundColor Green
Write-Host "✅ Updated CORS configuration in backend/server.js" -ForegroundColor Green

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Deploy frontend changes to Vercel" -ForegroundColor White
Write-Host "2. Set VITE_API_URL=https://component-generator-cy7z.onrender.com/api in Vercel environment variables" -ForegroundColor White
Write-Host "3. Deploy backend changes to Render" -ForegroundColor White
Write-Host "4. Test login/signup functionality" -ForegroundColor White 