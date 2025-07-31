# Component Generator Backend Deployment Script

Write-Host "🚀 Deploying Component Generator Backend to Render..." -ForegroundColor Green

# Navigate to backend directory
Set-Location backend

# Check if we're in the right directory
if (-not (Test-Path "server.js")) {
    Write-Host "❌ Error: server.js not found. Please run this script from the project root." -ForegroundColor Red
    exit 1
}

# Add all changes
Write-Host "➕ Adding changes..." -ForegroundColor Cyan
git add .

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Cyan
git commit -m "Fix CORS configuration and update backend URL"

# Push to remote
Write-Host "🚀 Pushing to Render..." -ForegroundColor Cyan
git push

Write-Host "✅ Deployment initiated!" -ForegroundColor Green
Write-Host "⏳ Wait 2-3 minutes for Render to deploy..." -ForegroundColor Yellow
Write-Host "🔗 Backend URL: https://component-generator-cy7z.onrender.com" -ForegroundColor Blue
Write-Host "🔍 Test endpoint: https://component-generator-cy7z.onrender.com/api/health" -ForegroundColor Blue 