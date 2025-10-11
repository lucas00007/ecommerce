import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ title, products, onAddToCart }) => {
  return (
    <div style={{ marginBottom: '100px', marginTop: '100px' }}>
      <h2 style={{
        fontSize: '32px',
        textAlign: 'center',
        marginBottom: '50px',
        color: '#333'
      }}>
        {title}
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        padding: '0 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        justifyContent: 'center'
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
