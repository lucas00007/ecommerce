import React, { useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Button from './Button';
import { useResponsive } from '../hooks/useResponsive';

const ProductCard = ({ product, onAddToCart, onViewDetails }) => {
  const images = product.images || [product.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isMobile } = useResponsive();

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div 
      onClick={() => onViewDetails && onViewDetails(product)}
      style={{
      border: '2px solid #e0e0e0',
      borderRadius: '15px',
      padding: isMobile ? '15px' : '30px',
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
      <div style={{ marginBottom: '25px' }}>
        {images.length > 1 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
            <button
              onClick={prevImage}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: '0.2'
              }}
            >
              <ChevronLeft size={24} color="#fff" />
            </button>
            <div style={{ position: 'relative' }}>
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                style={{
                  width: '100%',
                  maxWidth: isMobile ? '280px' : '400px',
                  height: isMobile ? '240px' : '320px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  filter: product.grayscale ? 'grayscale(100%)' : 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '5px'
              }}>
                {images.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: index === currentImageIndex ? '#fff' : 'rgba(255,255,255,0.5)'
                    }}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={nextImage}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: '0.2'
              }}
            >
              <ChevronRight size={24} color="#fff" />
            </button>
          </div>
        )}
        {images.length === 1 && (
          <img
            src={images[currentImageIndex]}
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: isMobile ? '280px' : '400px',
              height: isMobile ? '240px' : '320px',
              objectFit: 'cover',
              borderRadius: '12px',
              filter: product.grayscale ? 'grayscale(100%)' : 'none'
            }}
          />
        )}
      </div>
      <h3 style={{ margin: '0 0 10px 0', fontSize: isMobile ? '18px' : '20px' }}>{product.name}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={14} fill="#ffc107" color="#ffc107" />
        ))}
        <span style={{ fontSize: '12px', color: '#666', marginLeft: '5px' }}>(4.8)</span>
      </div>
      <p style={{ color: '#666', margin: '0 0 10px 0', fontSize: isMobile ? '13px' : '14px' }}>
        {product.description}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '15px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '10px' : '0'
      }}>
        <span style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#007bff' }}>
          ${product.price}
        </span>
        <Button onClick={() => onAddToCart(product)}>
          <ShoppingCart size={16} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          {isMobile ? 'Add to Cart' : 'Add'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
