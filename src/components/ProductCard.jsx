import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
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
