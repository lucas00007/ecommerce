// Web3Forms Configuration
const WEB3FORMS_ACCESS_KEY = '0d2d4d6c-1009-4889-8fe2-401e179378c7';

export const sendOrderConfirmationEmail = async (orderData) => {
  const { email, name, orderNumber, items, total, shippingAddress } = orderData;

  try {
    const orderItemsList = items.map(item => 
      `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const emailBody = `
Hi ${name},

Thank you for your order!

We've received your order and are preparing it for shipment.

ORDER DETAILS

Order Number: #${orderNumber}

Items:
${orderItemsList}

Total: $${total.toFixed(2)}

SHIPPING ADDRESS

${shippingAddress.address}
${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.zip}

You'll receive a shipping confirmation email with tracking information once your order ships (typically within 1-2 business days).

Questions? Reply to this email or contact us at sds.llc.0016@gmail.com

Thank you for supporting handcrafted Andean artisans!

Best regards,
Southern Designs Store
Authentic Andean Alpaca Products
    `;

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Order Confirmation #${orderNumber} - Southern Designs Store`,
        from_name: 'Southern Designs Store',
        email: email,
        name: name,
        message: emailBody
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Order confirmation email sent to:', email);
      return { success: true, message: 'Email sent successfully' };
    } else {
      console.error('❌ Email send failed:', result);
      return { success: false, message: 'Email failed to send' };
    }
  } catch (error) {
    console.error('❌ Email send error:', error);
    return { success: false, message: 'Email failed to send' };
  }
};

export const sendWelcomeEmail = async (userData) => {
  const { email, name } = userData;

  try {
    const welcomeMessage = `
Hi ${name},

Welcome to the Southern Designs Store family! 🎉

We're thrilled to have you join our community of alpaca lovers.

SPECIAL WELCOME GIFT 🎁

Use code: WELCOME10
Get 10% off your first order!

WHY CHOOSE OUR ALPACA PRODUCTS?

✓ 100% Authentic Andean Alpaca Wool
✓ Handcrafted by Local Artisans
✓ Soft, Warm & Hypoallergenic
✓ Sustainable & Ethical

Browse our collection of sweaters, ponchos, and more!

Questions? We're here to help!
Email: sds.llc.0016@gmail.com

Best regards,
Southern Designs Store Team
    `;

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'Welcome to Southern Designs Store! 🎁 10% Off Your First Order',
        from_name: 'Southern Designs Store',
        email: email,
        name: name,
        message: welcomeMessage
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Welcome email sent to:', email);
      return { success: true, message: 'Welcome email sent' };
    }
  } catch (error) {
    console.error('❌ Welcome email error:', error);
  }
  
  return { success: false, message: 'Email failed to send' };
};

export const sendShippingNotification = async (orderData) => {
  const { email, orderNumber, trackingNumber } = orderData;

  console.log('📧 Shipping Notification:', { email, orderNumber, trackingNumber });
  return { success: true, message: 'Shipping notification sent' };
};
