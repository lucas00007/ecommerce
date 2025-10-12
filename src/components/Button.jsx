import React from 'react';

const Button = ({ children, onClick, variant = 'primary', ...props }) => {
  const baseStyle = {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s',
    minHeight: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      padding: '14px 20px',
      fontSize: '14px',
      minHeight: '48px'
    }
  };

  const variants = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white'
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white'
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white'
    }
  };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant] }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
