# Simple Stripe Setup (No Backend Needed)

## Option: Use Stripe Payment Links

This is the EASIEST way to accept payments without setting up a backend.

### Step 1: Create Payment Link in Stripe

1. Go to: https://dashboard.stripe.com/test/payment-links
2. Click "New" button
3. Add your product:
   - Name: "Alpaca Sweater"
   - Price: Variable (customer chooses)
4. Click "Create link"
5. Copy the payment link URL

### Step 2: Use the Link in Your App

You'll get a URL like: `https://buy.stripe.com/test_xxxxx`

Add this to your `.env`:
```
REACT_APP_STRIPE_PAYMENT_LINK=https://buy.stripe.com/test_xxxxx
```

### Step 3: Update Checkout to Use Link

When user clicks checkout, redirect them to the Stripe payment link with the amount.

---

## Current Setup (Needs Backend)

Your current setup uses Stripe Elements which requires a backend to create payment intents.

**You need ONE of these:**
1. ✅ Netlify Functions (easiest - already have the code)
2. ⏳ Amplify Lambda (complex - needs proper deployment)
3. ✅ Stripe Payment Links (simplest - no backend)

**Recommendation:** Deploy to Netlify for functions, keep Amplify for hosting.
