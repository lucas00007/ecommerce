# 💳 Stripe Payment Setup Guide

## Step 1: Create Stripe Account

1. Go to https://stripe.com
2. Click "Start now" or "Sign up"
3. Create your account with business email
4. Complete business verification

## Step 2: Get API Keys

1. Log into Stripe Dashboard: https://dashboard.stripe.com
2. Click "Developers" in the left menu
3. Click "API keys"
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`) - Safe to use in frontend
   - **Secret key** (starts with `sk_test_...`) - NEVER expose this!

## Step 3: Add Keys to Your Project

### For Local Development:

Create a `.env` file in your project root:

```bash
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
```

### For Amplify Deployment:

1. Go to AWS Amplify Console
2. Select your app
3. Go to "Environment variables" in left menu
4. Add variable:
   - Key: `REACT_APP_STRIPE_PUBLISHABLE_KEY`
   - Value: `pk_test_YOUR_KEY_HERE`

## Step 4: Set Up Backend (REQUIRED!)

⚠️ **IMPORTANT:** You CANNOT process payments from frontend only!

You need a backend to:
- Create payment intents securely
- Handle webhooks
- Prevent fraud

### Option A: AWS Lambda (Recommended for Amplify)

```bash
# In your project directory
amplify add function
# Name it: stripePayment
# Runtime: NodeJS
```

Create Lambda function:

```javascript
// amplify/backend/function/stripePayment/src/index.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
    });
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
```

Deploy:
```bash
amplify push
```

### Option B: Simple Backend with Express

Create a separate backend project:

```bash
mkdir stripe-backend
cd stripe-backend
npm init -y
npm install express stripe cors dotenv
```

Create `server.js`:

```javascript
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
    });
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

Deploy to Heroku, Railway, or AWS EC2.

## Step 5: Update Frontend

Once backend is ready, update `src/services/stripeService.js`:

```javascript
export const createPaymentIntent = async (amount) => {
  const response = await fetch('YOUR_BACKEND_URL/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });
  
  return await response.json();
};
```

## Step 6: Test Payments

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Any future expiry date (e.g., 12/34)
- Any 3-digit CVC

## Step 7: Go Live

1. Complete Stripe account verification
2. Switch from test keys to live keys
3. Update environment variables
4. Test thoroughly!

## Costs

- No monthly fees
- 2.9% + $0.30 per successful transaction
- No setup fees

## Support

- Stripe Docs: https://stripe.com/docs
- Stripe Support: https://support.stripe.com

---

**Current Status:** ⚠️ NOT CONFIGURED
**Next Step:** Create Stripe account and get API keys
