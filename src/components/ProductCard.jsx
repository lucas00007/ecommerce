import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{
      border: '2px solid #e0e0e0',
      borderRadius: '15px',
      padding: '30px',
      background: 'linear-gradient(135deg, #fdffff 0%, #fafffe 100%)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.02)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    }}
    >
      {product.id <= 2 && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: '#ff6b6b',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '25px',
          fontSize: '14px',
          fontWeight: 'bold',
          zIndex: 10
        }}>
          FEATURED
        </div>
      )}
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '320px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '25px',
          filter: product.grayscale ? 'grayscale(100%)' : 'none'
        }}
      />
      <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{product.name}</h3>
      <p style={{ color: '#666', margin: '0 0 10px 0', fontSize: '14px' }}>
        {product.description}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '15px'
      }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
          ${product.price}
        </span>
        <Button onClick={() => onAddToCart(product)}>
          <ShoppingCart size={18} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          Add
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
