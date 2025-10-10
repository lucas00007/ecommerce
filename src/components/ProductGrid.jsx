import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h3 style={{ color: '#666' }}>No products found</h3>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '30px',
      padding: '40px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
