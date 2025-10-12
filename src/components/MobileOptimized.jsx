import React from 'react';

// Mobile-optimized container component
export const MobileContainer = ({ children, padding = true }) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '100vw',
      padding: padding ? '0 15px' : '0',
      boxSizing: 'border-box'
    }}>
      {children}
    </div>
  );
};

// Touch-friendly button wrapper
export const TouchButton = ({ children, onClick, style = {}, ...props }) => {
  return (
    <button
      onClick={onClick}
      style={{
        minHeight: '44px',
        minWidth: '44px',
        padding: '12px 16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.2s',
        touchAction: 'manipulation',
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
};

// Mobile-optimized text input
export const MobileInput = ({ style = {}, ...props }) => {
  return (
    <input
      style={{
        minHeight: '44px',
        padding: '12px 16px',
        fontSize: '16px', // Prevents zoom on iOS
        border: '2px solid #e0e0e0',
        borderRadius: '8px',
        outline: 'none',
        boxSizing: 'border-box',
        ...style
      }}
      {...props}
    />
  );
};