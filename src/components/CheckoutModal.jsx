import React, { useState } from 'react';
import { CheckCircle, CreditCard, X } from 'lucide-react';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '../services/stripeService';
import Button from './Button';
import StripeCheckout from './StripeCheckout';
import { useResponsive } from '../hooks/useResponsive';
import { sendOrderConfirmationEmail } from '../services/emailService';

const stripePromise = getStripe();

const CheckoutModal = ({ isOpen, onClose, total, user, cart = [] }) => {
  const [step, setStep] = useState('shipping'); // 'shipping', 'payment', 'success'
  const [shippingInfo, setShippingInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvc: ''
  });
  const { isMobile } = useResponsive();

  if (!isOpen) return null;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSuccess = async (paymentMethod) => {
    const orderNumber = `ORD-${Date.now()}`;
    const orderData = {
      email: shippingInfo.email,
      name: shippingInfo.name,
      orderNumber,
      items: cart,
      total: total + 5,
      shippingAddress: shippingInfo
    };
    
    await sendOrderConfirmationEmail(orderData);
    setStep('success');
  };

  const handlePaymentError = (error) => {
    alert('Payment failed: ' + error);
  };

  const handleClose = () => {
    setStep('shipping');
    setShippingInfo({ name: '', email: '', address: '', city: '', state: '', zip: '' });
    setPaymentInfo({ cardNumber: '', expiry: '', cvc: '' });
    onClose();
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001,
        padding: isMobile ? '20px' : '40px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: isMobile ? '25px' : '40px',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {step === 'success' ? (
          <div style={{ textAlign: 'center' }}>
            <CheckCircle size={64} color="#28a745" style={{ marginBottom: '20px' }} />
            <h2 style={{ margin: '0 0 10px 0' }}>Order Confirmed!</h2>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              Thank you for your purchase of ${total.toFixed(2)}
            </p>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
              A confirmation email has been sent to {shippingInfo.email}
            </p>
            <Button onClick={handleClose}>Continue Shopping</Button>
          </div>
        ) : step === 'shipping' ? (
          <div>
            <h2 style={{ margin: '0 0 25px 0', fontSize: '24px' }}>Shipping Information</h2>
            <form onSubmit={handleShippingSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
                <input
                  type="email"
                  required
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Address</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>City</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ width: '100px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>State</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ width: '100px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>ZIP</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.zip}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Shipping:</span>
                  <span>$5.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', marginTop: '10px', paddingTop: '10px', borderTop: '2px solid #dee2e6' }}>
                  <span>Total:</span>
                  <span>${(total + 5).toFixed(2)}</span>
                </div>
              </div>
              <Button type="submit" style={{ width: '100%', marginTop: '20px' }}>
                Continue to Payment
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <h2 style={{ margin: '0 0 25px 0', fontSize: '24px' }}>
              <CreditCard size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
              Payment Information
            </h2>
            <div style={{ 
              backgroundColor: '#d1ecf1', 
              border: '1px solid #0c5460', 
              borderRadius: '8px', 
              padding: '15px', 
              marginBottom: '20px',
              fontSize: '14px',
              color: '#0c5460'
            }}>
              ℹ️ <strong>Test Mode:</strong> Use card 4242 4242 4242 4242 with any future date and CVC.
            </div>
            
            <Elements stripe={stripePromise}>
              <StripeCheckout 
                amount={total + 5}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </Elements>
            
            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px' }}>
                <span>Total to Pay:</span>
                <span>${(total + 5).toFixed(2)}</span>
              </div>
            </div>
            
            <Button type="button" variant="secondary" onClick={() => setStep('shipping')} style={{ width: '100%', marginTop: '20px' }}>
              Back to Shipping
            </Button>
            <p style={{ fontSize: '12px', color: '#999', marginTop: '15px', textAlign: 'center' }}>
              🔒 Your payment information is secure and encrypted
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
