import React from 'react';
import { X } from 'lucide-react';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1001, padding: '20px'
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        backgroundColor: 'white', borderRadius: '15px', padding: '40px',
        maxWidth: '800px', width: '100%', maxHeight: '90vh', overflowY: 'auto',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '15px', right: '15px',
          background: 'transparent', border: 'none', cursor: 'pointer'
        }}>
          <X size={24} />
        </button>

        <h1 style={{ marginBottom: '20px' }}>Privacy Policy</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>Last Updated: October 2025</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information you provide when placing orders: name, email, shipping address, and payment information.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Send order confirmations and shipping updates</li>
          <li>Respond to customer service requests</li>
          <li>Improve our products and services</li>
        </ul>

        <h2>3. Payment Information</h2>
        <p>Payment information is processed securely through Stripe. We do not store credit card numbers on our servers.</p>

        <h2>4. Information Sharing</h2>
        <p>We do not sell or rent your personal information. We share information only with:</p>
        <ul>
          <li>Payment processors (Stripe)</li>
          <li>Shipping carriers</li>
          <li>Email service providers</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>We use industry-standard security measures to protect your information. However, no method is 100% secure.</p>

        <h2>6. Cookies</h2>
        <p>We use cookies to improve your browsing experience and remember your cart items.</p>

        <h2>7. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. Contact us at sds.llc.0016@gmail.com</p>

        <h2>8. Changes to Policy</h2>
        <p>We may update this policy. Changes will be posted on this page.</p>

        <h2>9. Contact Us</h2>
        <p>Questions? Email us at sds.llc.0016@gmail.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
