# Exit on error
$ErrorActionPreference = "Stop"

Write-Host "📦 Installing dependencies..."
npm ci

Write-Host "🔨 Building Next.js project..."
npm run build

Write-Host "🚀 Deploying to Firebase Hosting..."
firebase deploy

Write-Host "✅ Build and deployment successful!"
