import React from 'react';
import { X } from 'lucide-react';

const ReturnPolicy = ({ isOpen, onClose }) => {
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

        <h1 style={{ marginBottom: '20px' }}>Return & Refund Policy</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>Last Updated: October 2025</p>

        <h2>30-Day Return Policy</h2>
        <p>We want you to love your alpaca products! If you're not satisfied, you can return items within 30 days of delivery.</p>

        <h2>Return Conditions</h2>
        <p>Items must be:</p>
        <ul>
          <li>Unworn and unwashed</li>
          <li>In original condition with tags attached</li>
          <li>In original packaging</li>
        </ul>

        <h2>Non-Returnable Items</h2>
        <ul>
          <li>Items marked as final sale</li>
          <li>Worn or washed items</li>
          <li>Items without tags</li>
        </ul>

        <h2>How to Return</h2>
        <ol>
          <li>Email us at sds.llc.0016@gmail.com with your order number</li>
          <li>We'll provide return shipping instructions</li>
          <li>Ship the item back to us</li>
          <li>Refund processed within 5-7 business days after we receive the item</li>
        </ol>

        <h2>Refund Method</h2>
        <p>Refunds are issued to the original payment method. Shipping costs are non-refundable unless the item is defective.</p>

        <h2>Exchanges</h2>
        <p>We don't offer direct exchanges. Please return the item for a refund and place a new order.</p>

        <h2>Damaged or Defective Items</h2>
        <p>If you receive a damaged or defective item, contact us immediately at sds.llc.0016@gmail.com with photos. We'll arrange a free return and full refund or replacement.</p>

        <h2>Questions?</h2>
        <p>Contact us at sds.llc.0016@gmail.com</p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
