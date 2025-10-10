import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';

const CheckoutModal = ({ isOpen, onClose, total }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '40px',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}
      >
        <CheckCircle size={64} color="#28a745" style={{ marginBottom: '20px' }} />
        <h2 style={{ margin: '0 0 10px 0' }}>Order Confirmed!</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Thank you for your purchase of ${total.toFixed(2)}
        </p>
        <Button onClick={onClose}>Continue Shopping</Button>
      </div>
    </div>
  );
};

export default CheckoutModal;
