# Setup Environment Variables for AccioJobs Backend
# Run this script from the project root directory

Write-Host "Setting up environment variables for AccioJobs Backend..." -ForegroundColor Green

# Create .env file in backend directory
$envContent = @"
# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random_123456789

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/acciojobs_playground

# Optional: Redis Configuration (if using Redis for sessions)
# REDIS_URL=redis://localhost:6379

# Optional: CORS Configuration
CORS_ORIGIN=http://localhost:5173
"@

# Write to backend/.env file
$envContent | Out-File -FilePath "backend\.env" -Encoding UTF8

Write-Host "Environment file created at backend\.env" -ForegroundColor Green
Write-Host "Please make sure MongoDB is running on localhost:27017" -ForegroundColor Yellow
Write-Host "You can start MongoDB with: mongod" -ForegroundColor Yellow
Write-Host "Then start the backend with: cd backend; npm run dev" -ForegroundColor Yellow
Write-Host "And the frontend with: cd frontend; npm run dev" -ForegroundColor Yellow 