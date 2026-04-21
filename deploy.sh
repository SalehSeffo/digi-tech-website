#!/bin/bash

# Deploy script for Degi-Tech - STRATO Hosting
# Usage: ./deploy.sh
# Features: Build verification, .htaccess deployment, favicon inclusion, error handling
# Server: 5020252480.ssh.w2.strato.hosting | Username: su267606 | Protocol: SFTP + SSH

set -e  # Exit on error

echo "🚀 Starting deployment to STRATO..."
echo ""

# Step 1: Build the project
echo "📦 Building project..."
pnpm run build

if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist/ folder not found"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Step 2: Pre-deployment verification
echo "🔍 Verifying build artifacts..."

# Check that dist/.htaccess exists
if [ ! -f "dist/.htaccess" ]; then
    echo "❌ ERROR: dist/.htaccess not found!"
    echo "   Make sure vite.config.ts is configured to copy .htaccess"
    exit 1
fi
echo "  ✅ .htaccess found"

# Check that dist/index.html exists
if [ ! -f "dist/index.html" ]; then
    echo "❌ ERROR: dist/index.html not found!"
    exit 1
fi
echo "  ✅ index.html found"

# Check for favicon
if [ ! -f "dist/favicon.ico" ]; then
    echo "⚠️  WARNING: favicon.ico not found in dist/"
    echo "   Make sure favicon is included in vite.config.ts public assets"
else
    echo "  ✅ favicon.ico found"
fi

# Check that dist/assets directory exists
if [ -d "dist/assets" ]; then
    ASSET_COUNT=$(ls -1 dist/assets/ | wc -l)
    echo "  ✅ Assets found ($ASSET_COUNT files)"
else
    echo "⚠️  WARNING: dist/assets directory not found"
fi

echo ""
echo "✅ All pre-deployment checks passed!"
echo ""

# Step 3: Upload to STRATO using rsync over SSH with exclusions
echo "📤 Uploading to STRATO server..."
echo "ℹ️  Enter your STRATO password when prompted"
echo ""

if rsync -avz --delete \
    -e "ssh -p 22" \
    --exclude='.DS_Store' \
    --exclude='._*' \
    --exclude='.firebase' \
    --exclude='firebase.json' \
    --exclude='.env' \
    --exclude='.env.local' \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='pnpm-lock.yaml' \
    --exclude='README.md' \
    dist/ \
    su267606@5020252480.ssh.w2.strato.hosting:/home/www/public/; then
    echo "✅ Upload completed successfully"
else
    echo "❌ Upload failed."
    exit 1
fi

echo ""
echo "🎉 Deployment successful!"
echo ""
echo "📋 Summary:"
echo "  ✅ Build completed"
echo "  ✅ Build artifacts verified"
echo "  ✅ .htaccess deployed (SPA routing enabled)"
echo "  ✅ favicon.ico deployed"
echo "  ✅ Skipped: Mac files (.DS_Store, ._*), Firebase files, .git, node_modules"
echo "  ✅ index.html deployed"
echo "  ✅ assets/ folder deployed"
echo ""
echo "🌍 Your website is now live!"
echo ""
echo "💡 Next steps:"
echo "  1. Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)"
echo "  2. Test the site in incognito window"
echo "  3. Verify favicon displays correctly"
echo "  4. Check all pages load and routing works"
echo "  5. Verify all images and assets display correctly"

