import { loadStripe } from '@stripe/stripe-js';

const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

let stripePromise;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export const createPaymentIntent = async (amount) => {
  try {
    const response = await fetch('https://22w4k4y2kpqryypw7pysyfec6e0yuryv.lambda-url.us-east-1.on.aws/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Payment error:', error);
    return { error: error.message };
  }
};
