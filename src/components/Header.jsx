import React, { useState } from 'react';
import { ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';
import { useResponsive } from '../hooks/useResponsive';

const Header = ({ cartItemCount, onCartClick, user, onAuthClick, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'linear-gradient(135deg, #51c2bc 0%, #764ba2 100%)',
      color: 'white',
      padding: isMobile ? '10px 20px' : '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '15px' }}>
        <img 
          src="/assets/SDSLogo.jpg" 
          alt="Southern Designs Store" 
          style={{ 
            height: isMobile ? '50px' : '70px', 
            width: 'auto', 
            minWidth: isMobile ? '70px' : '100px' 
          }} 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <h1 style={{ margin: 0, fontSize: isMobile ? '20px' : '28px' }}>SDS</h1>
      </div>
      
      {/* Desktop Navigation */}
      <nav style={{ 
        display: isMobile ? 'none' : 'flex', 
        gap: '30px', 
        alignItems: 'center' 
      }}>
        <a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Home</a>
        <a href="#shop" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Shop</a>
        <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>About</a>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '16px', fontWeight: '500' }}>Contact</a>
      </nav>
      
      {/* Desktop User Menu */}
      <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '15px' }}>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '14px' }}>Hi, {user.name || 'Guest'}</span>
            <button
              onClick={onLogout}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '8px'
              }}
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        ) : (
          <button
            onClick={onAuthClick}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <User size={20} />
            <span style={{ fontSize: '14px' }}>Login</span>
          </button>
        )}
      </div>
      
      {/* Mobile Navigation */}
      <div style={{ display: isMobile ? 'flex' : 'none', alignItems: 'center', gap: '15px' }}>
        {user && !isMobileMenuOpen && (
          <button
            onClick={onLogout}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <LogOut size={20} />
          </button>
        )}
        {!user && !isMobileMenuOpen && (
          <button
            onClick={onAuthClick}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <User size={20} />
          </button>
        )}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
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
        <ShoppingCart size={isMobile ? 24 : 28} />
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
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: isMobile ? '70px' : '100px',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(81, 194, 188, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          zIndex: 99
        }}>
          <a 
            href="#home" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500', padding: '10px 0' }}
          >
            Home
          </a>
          <a 
            href="#shop" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500', padding: '10px 0' }}
          >
            Shop
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500', padding: '10px 0' }}
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '500', padding: '10px 0' }}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
