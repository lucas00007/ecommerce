import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'linear-gradient(135deg, #51c2bc 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src="/assets/SDS Logo.JPG" alt="Southern Designs Store" style={{ height: '100px', width: 'auto' }} />
        <h1 style={{ margin: 0, fontSize: '28px' }}>Southern Designs Store</h1>
      </div>
      <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Home</a>
        <a href="#shop" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Shop</a>
        <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>About</a>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Contact</a>
      </nav>
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
