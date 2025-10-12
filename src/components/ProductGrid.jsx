import React from 'react';
import ProductCard from './ProductCard';
import { useResponsive } from '../hooks/useResponsive';

const ProductGrid = ({ products, onAddToCart, onViewDetails }) => {
  const { isMobile } = useResponsive();
  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h3 style={{ color: '#666' }}>No products found</h3>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '30px' : '50px',
      padding: isMobile ? '20px 15px' : '40px',
      maxWidth: '800px',
      margin: '0 auto',
      alignItems: 'center'
    }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
