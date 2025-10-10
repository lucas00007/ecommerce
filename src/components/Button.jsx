import React from 'react';

const Button = ({ children, onClick, variant = 'primary', ...props }) => {
  const baseStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s'
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
