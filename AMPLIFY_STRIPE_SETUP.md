# Amplify + Stripe Integration Setup Guide

## What Was Fixed

### 1. Navigation Bar Issues ✅
- Added full navigation menu (Home, Shop, About, Blog, Contact)
- Added Login/Logout buttons with user display
- Made header sticky and mobile responsive
- Added hamburger menu for mobile devices
- Fixed section navigation with smooth scrolling

### 2. Stripe + Amplify Integration ✅
- Created Amplify Lambda function for Stripe payments
- Set up API Gateway endpoint for payment processing
- Updated stripeService.js to use Amplify API (with Netlify fallback)
- Configured CORS for API access

## Deployment Steps

### Step 1: Install Dependencies
```bash
cd /Users/jersonlopez/my-app
npm install
```

### Step 2: Set Up Environment Variables

Create or update `.env` file with your Stripe keys:
```bash
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY
```

### Step 3: Add Stripe Secret to Amplify

You need to add your Stripe secret key to the Lambda function:

```bash
# Push the backend changes
amplify push

# After deployment, add the secret key via AWS Console:
# 1. Go to AWS Lambda Console
# 2. Find function: stripePayment-{env}
# 3. Configuration → Environment variables
# 4. Add: STRIPE_SECRET_KEY = sk_test_YOUR_SECRET_KEY
```

Or use AWS CLI:
```bash
aws lambda update-function-configuration \
  --function-name stripePayment-dev \
  --environment "Variables={STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY}"
```

### Step 4: Deploy to Amplify

```bash
# Push all backend changes
amplify push

# Build and deploy frontend
npm run build
amplify publish
```

### Step 5: Update API Configuration in Code

After deployment, Amplify will generate `aws-exports.js` with your API endpoint. The app will automatically use it.

## Testing Locally

1. Start the development server:
```bash
npm start
```

2. Test navigation:
   - Click on navigation links (Home, Shop, About, Blog, Contact)
   - Test mobile menu (resize browser)
   - Test Login/Logout buttons

3. Test Stripe payments:
   - Add items to cart
   - Click Checkout
   - Use test card: 4242 4242 4242 4242
   - Any future expiry date and CVC

## Stripe Test Cards

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Requires Auth**: 4000 0025 0000 3155

## API Endpoints

After deployment, your API will be available at:
```
https://{api-id}.execute-api.{region}.amazonaws.com/{env}/payment
```

## Troubleshooting

### Navigation not working?
- Clear browser cache
- Check that section IDs exist in App.js
- Verify Header component is receiving all props

### Stripe payments failing?
1. Check environment variables are set
2. Verify Lambda function has STRIPE_SECRET_KEY
3. Check browser console for errors
4. Verify API Gateway CORS settings

### Amplify API not found?
- Run `amplify push` to deploy backend
- Check `aws-exports.js` is generated
- Verify API name is 'stripeapi' in configuration

## Environment Variables Checklist

### Frontend (.env)
- ✅ REACT_APP_STRIPE_PUBLISHABLE_KEY

### Lambda Function (AWS Console)
- ✅ STRIPE_SECRET_KEY

## Next Steps

1. **Get Production Stripe Keys**: Replace test keys with production keys
2. **Set Up Amplify Auth**: Add proper authentication (Cognito)
3. **Add Order History**: Store orders in DynamoDB via GraphQL
4. **Email Notifications**: Set up SES for order confirmations
5. **Analytics**: Add CloudWatch monitoring

## Support

If you encounter issues:
1. Check AWS CloudWatch logs for Lambda errors
2. Check browser console for frontend errors
3. Verify all environment variables are set
4. Test with Stripe test cards first

## Cost Considerations

- **Lambda**: First 1M requests/month free
- **API Gateway**: First 1M requests/month free
- **Stripe**: 2.9% + $0.30 per transaction
- **Amplify Hosting**: Free tier available

---

**Last Updated**: $(date)
**Amplify Version**: Check with `amplify --version`
