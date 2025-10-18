import React, { useState } from 'react';
import { ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';
import { useResponsive } from '../hooks/useResponsive';

const Header = ({ cartItemCount, onCartClick, user, onAuthClick, onLogout }) => {
  const { isMobile } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header style={{
      background: 'linear-gradient(135deg, #51c2bc 0%, #764ba2 100%)',
      color: 'white',
      padding: isMobile ? '15px 20px' : '20px 40px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: isMobile ? '24px' : '28px' }}>SDS</h1>

        {!isMobile && (
          <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {!isMobile && (
            user ? (
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <span style={{ fontSize: '14px' }}>Hi, {user.name}</span>
                <button
                  onClick={onLogout}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '8px 15px',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <User size={16} />
                Login
              </button>
            )
          )}

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

          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '5px'
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <nav style={{
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              {link.name}
            </a>
          ))}
          {user ? (
            <>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>Hi, {user.name}</span>
              <button
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '10px',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px'
                }}
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                onAuthClick();
                setIsMenuOpen(false);
              }}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid white',
                color: 'white',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px'
              }}
            >
              <User size={16} />
              Login
            </button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
