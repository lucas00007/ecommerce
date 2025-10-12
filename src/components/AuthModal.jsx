import React, { useState } from 'react';
import { X, User, Mail, Lock } from 'lucide-react';
import Button from './Button';
import { useResponsive } from '../hooks/useResponsive';
import { sendWelcomeEmail } from '../services/emailService';

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { isMobile } = useResponsive();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      await sendWelcomeEmail(formData);
    }
    
    onLogin(formData);
    onClose();
  };

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
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1000
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          borderRadius: '15px',
          width: isMobile ? '90%' : '450px',
          maxHeight: '90vh',
          overflowY: 'auto',
          zIndex: 1001,
          padding: isMobile ? '30px 20px' : '40px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        <h2 style={{ margin: '0 0 30px 0', fontSize: '28px', textAlign: 'center' }}>
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                <User size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                placeholder="John Doe"
              />
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              <Mail size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              placeholder="you@example.com"
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              <Lock size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Password
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" style={{ width: '100%', marginBottom: '15px' }}>
            {isSignUp ? 'Sign Up' : 'Log In'}
          </Button>

          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              style={{
                background: 'none',
                border: 'none',
                color: '#007bff',
                cursor: 'pointer',
                fontSize: '14px',
                textDecoration: 'underline'
              }}
            >
              {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </form>

        <div style={{
          marginTop: '25px',
          paddingTop: '25px',
          borderTop: '1px solid #e0e0e0',
          textAlign: 'center'
        }}>
          <button
            onClick={() => {
              onLogin({ guest: true });
              onClose();
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#666',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
