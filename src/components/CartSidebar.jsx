import React from 'react';
import { X } from 'lucide-react';
import CartItem from './CartItem';
import Button from './Button';

const CartSidebar = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, total, onCheckout }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 999
        }}
      />
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '400px',
        maxWidth: '100%',
        height: '100vh',
        backgroundColor: 'white',
        boxShadow: '-2px 0 10px rgba(0,0.5,0.6) ',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ margin: 0 }}>Shopping Cart</h2>
          <button
            onClick={onClose}
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cart.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
              Your cart is empty
            </div>
          ) : (
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div style={{
            padding: '20px',
            borderTop: '2px solid #e0e0e0'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button onClick={onCheckout} style={{ width: '100%' }}>
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
