# 🌐 Custom Domain Setup Guide

## Why You Need a Custom Domain

Your current URL: `https://main.d1u6qbz2fcb47h.amplifyapp.com`

Problems:
- ❌ Hard to remember
- ❌ Looks unprofessional
- ❌ Customers won't trust it for payments
- ❌ Can't use for marketing

With custom domain: `https://southerndesignsstore.com`
- ✅ Professional
- ✅ Easy to remember
- ✅ Builds trust
- ✅ Better for SEO

## Option 1: Buy Domain Through AWS Route 53 (Easiest)

### Step 1: Search for Domain

1. Go to AWS Route 53: https://console.aws.amazon.com/route53
2. Click "Registered domains" → "Register domain"
3. Search for your desired domain:
   - `southerndesignsstore.com`
   - `southerndesigns.shop`
   - `andeanalpacastore.com`
   - `sdsalpaca.com`

### Step 2: Purchase Domain

1. Select available domain
2. Add to cart
3. Fill in contact information
4. Enable auto-renewal (recommended)
5. Complete purchase
6. Cost: $12-15/year for .com

### Step 3: Connect to Amplify

1. Go to AWS Amplify Console
2. Select your app
3. Click "Domain management" in left menu
4. Click "Add domain"
5. Select your Route 53 domain from dropdown
6. Click "Configure domain"
7. Amplify will automatically:
   - Set up DNS records
   - Provision SSL certificate
   - Configure HTTPS

### Step 4: Wait for DNS

- DNS propagation: 15-30 minutes
- SSL certificate: 15-30 minutes
- Total wait time: ~1 hour

## Option 2: Buy Domain Elsewhere (GoDaddy, Namecheap, etc.)

### Step 1: Purchase Domain

Buy from any registrar:
- GoDaddy: https://godaddy.com
- Namecheap: https://namecheap.com
- Google Domains: https://domains.google

### Step 2: Get Amplify DNS Settings

1. Go to AWS Amplify Console
2. Select your app
3. Click "Domain management"
4. Click "Add domain"
5. Enter your domain name
6. Amplify will show you DNS records to add

### Step 3: Update DNS at Registrar

1. Log into your domain registrar
2. Find DNS settings
3. Add the records Amplify provided:
   - CNAME record for www
   - CNAME record for root domain
4. Save changes

### Step 4: Verify in Amplify

1. Return to Amplify Console
2. Click "Verify" or wait for automatic verification
3. Wait for SSL certificate (15-30 minutes)

## Domain Name Suggestions

Based on your business:

### Available to Check:
- southerndesignsstore.com
- southerndesigns.shop
- andeanalpacastore.com
- sdsalpaca.com
- alpacasoutherndesigns.com
- southernalpaca.store
- authenticalpaca.shop

### Tips:
- Keep it short and memorable
- Avoid hyphens and numbers
- .com is most trusted
- .shop and .store work well for e-commerce

## Costs

### Domain Registration:
- .com: $12-15/year
- .shop: $30-40/year
- .store: $50-60/year

### SSL Certificate:
- FREE with AWS Amplify

### Renewal:
- Set up auto-renewal to avoid losing domain

## After Domain is Live

1. Update all marketing materials
2. Update social media profiles
3. Update business cards
4. Set up email forwarding (optional):
   - info@yourdomain.com → sds.llc.0016@gmail.com

## Troubleshooting

### Domain not working after 1 hour?
- Check DNS records are correct
- Try clearing browser cache
- Check Amplify Console for errors

### SSL certificate pending?
- Wait up to 48 hours
- Ensure DNS records are correct
- Contact AWS support if still pending

## Email Setup (Optional)

Want professional email like orders@southerndesignsstore.com?

### Option A: Google Workspace
- Cost: $6/user/month
- Get Gmail with your domain
- Professional email addresses

### Option B: AWS SES + Route 53
- Cost: $0.10 per 1000 emails
- More technical setup
- Good for automated emails

---

**Current Status:** ⚠️ Using default Amplify domain
**Recommended:** Purchase domain through Route 53 for easiest setup
**Priority:** HIGH - Do this before marketing
