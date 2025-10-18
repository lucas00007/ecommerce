#!/bin/bash

echo "🚀 Starting Deployment Process..."
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  Warning: .env file not found!"
    echo "Please create .env file with:"
    echo "REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY"
    exit 1
fi

# Check if Stripe key is set
if ! grep -q "REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_" .env; then
    echo "⚠️  Warning: Stripe publishable key not set in .env"
    exit 1
fi

echo "✅ Environment variables check passed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi
echo "✅ Dependencies installed"
echo ""

# Push Amplify backend
echo "☁️  Pushing Amplify backend..."
amplify push --yes
if [ $? -ne 0 ]; then
    echo "❌ Amplify push failed"
    echo "💡 Tip: Make sure you're logged in with 'amplify configure'"
    exit 1
fi
echo "✅ Backend deployed"
echo ""

# Remind about Lambda environment variable
echo "⚠️  IMPORTANT: Don't forget to add STRIPE_SECRET_KEY to Lambda function!"
echo "Run this command (replace with your key):"
echo ""
echo "aws lambda update-function-configuration \\"
echo "  --function-name stripePayment-dev \\"
echo "  --environment \"Variables={STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY}\""
echo ""
read -p "Press Enter when you've added the secret key..."

# Build the app
echo "🔨 Building React app..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build completed"
echo ""

# Publish to Amplify hosting
echo "🌐 Publishing to Amplify hosting..."
amplify publish --yes
if [ $? -ne 0 ]; then
    echo "❌ Publish failed"
    exit 1
fi

echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "Next steps:"
echo "1. Test your website"
echo "2. Verify navigation works"
echo "3. Test Stripe payments with card: 4242 4242 4242 4242"
echo ""
