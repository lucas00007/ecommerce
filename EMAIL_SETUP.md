# Email Setup Guide - EmailJS with Gmail

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email
3. Verify your email address

## Step 2: Add Email Service (Gmail)
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Select **Gmail**
4. Click **Connect Account**
5. Sign in with: **sds.llc.0016@gmail.com**
6. Allow EmailJS to send emails
7. Copy your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Template Name: `order_confirmation`
4. Use this template:

```
Subject: Order Confirmation #{{order_number}} - Southern Designs Store

Hi {{to_name}},

Thank you for your order! We've received your order and it's being processed.

Order Details:
{{order_items}}

Total: ${{total_amount}}

Shipping Address:
{{shipping_address}}

Best regards,
Southern Designs Store
sds.llc.0016@gmail.com
```

5. Save and copy your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abc123xyz789`)

## Step 5: Update Your Code
Open `/src/services/emailService.js` and replace:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc123'; // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Your Template ID
const EMAILJS_PUBLIC_KEY = 'abc123xyz789'; // Your Public Key
```

Then uncomment this line:
```javascript
await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
```

## Step 6: Test
1. Run your app: `npm start`
2. Complete a test order
3. Check your Gmail inbox for the confirmation email

## Free Tier Limits
- 200 emails/month free
- Upgrade for more: https://www.emailjs.com/pricing

## Troubleshooting
- **Emails not sending?** Check browser console for errors
- **Gmail blocking?** Enable "Less secure app access" in Gmail settings
- **Template not working?** Verify variable names match exactly

## Your Gmail: sds.llc.0016@gmail.com
