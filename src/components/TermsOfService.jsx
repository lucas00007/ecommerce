import React from 'react';
import { X } from 'lucide-react';

const TermsOfService = ({ isOpen, onClose }) => {
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

        <h1 style={{ marginBottom: '20px' }}>Terms of Service</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>Last Updated: October 2025</p>

        <h2>1. Agreement to Terms</h2>
        <p>By accessing Southern Designs Store, you agree to these Terms of Service and all applicable laws.</p>

        <h2>2. Products</h2>
        <p>All products are authentic Andean alpaca products. We strive for accurate descriptions and images, but slight variations may occur due to handcrafted nature.</p>

        <h2>3. Pricing</h2>
        <p>All prices are in USD. We reserve the right to change prices without notice. Shipping costs are additional.</p>

        <h2>4. Orders</h2>
        <p>Order confirmation does not guarantee acceptance. We reserve the right to refuse or cancel orders.</p>

        <h2>5. Payment</h2>
        <p>Payment is processed securely through Stripe. We do not store credit card information.</p>

        <h2>6. Shipping</h2>
        <p>Shipping times are estimates. We are not responsible for delays caused by carriers.</p>

        <h2>7. Returns</h2>
        <p>See our Return Policy for details on returns and refunds.</p>

        <h2>8. Limitation of Liability</h2>
        <p>Southern Designs Store is not liable for any indirect, incidental, or consequential damages.</p>

        <h2>9. Contact</h2>
        <p>Questions? Contact us at sds.llc.0016@gmail.com</p>
      </div>
    </div>
  );
};

export default TermsOfService;
