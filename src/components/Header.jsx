import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header style={{
      backgroundColor: '#568f6a',
      color: 'white',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: 0, fontSize: '28px' }}>SDS</h1>
      <button
        onClick={onCartClick}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          position: 'relative',
          padding: '10px'
        }}
      >
        <ShoppingCart size={28} />
        {cartItemCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: '#ff4444',
            color: 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {cartItemCount}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
