import React, { useState } from 'react';
import { X, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import { useResponsive } from '../hooks/useResponsive';
import ProductReviews from './ProductReviews';

const ProductDetailsModal = ({ product, isOpen, onClose, onAddToCart, user }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isMobile } = useResponsive();

  if (!isOpen || !product) return null;

  const images = product.images || [product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '20px' : '40px'
        }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          borderRadius: '15px',
          maxWidth: isMobile ? '95%' : '900px',
          width: '100%',
          maxHeight: isMobile ? '90vh' : '80vh',
          overflowY: 'auto',
          zIndex: 1001,
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            zIndex: 10
          }}
        >
          <X size={24} />
        </button>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '20px' : '40px',
          padding: isMobile ? '20px' : '40px'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ position: 'relative' }}>
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                style={{
                  width: '100%',
                  height: isMobile ? '300px' : '400px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  filter: product.grayscale ? 'grayscale(100%)' : 'none'
                }}
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '15px',
                overflowX: 'auto'
              }}>
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      border: index === currentImageIndex ? '3px solid #007bff' : '3px solid transparent',
                      filter: product.grayscale ? 'grayscale(100%)' : 'none'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ margin: '0 0 15px 0', fontSize: isMobile ? '24px' : '28px' }}>
              {product.name}
            </h2>
            <p style={{
              fontSize: isMobile ? '28px' : '32px',
              fontWeight: 'bold',
              color: '#007bff',
              margin: '0 0 20px 0'
            }}>
              ${product.price}
            </p>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Description</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                {product.description}
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Details</h3>
              <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>100% Authentic Andean Alpaca Wool</li>
                <li>Handcrafted by local artisans</li>
                <li>Soft, warm, and hypoallergenic</li>
                <li>Category: {product.category}</li>
                {product.size && <li>Size: {product.size}</li>}
                {product.color && <li>Color: {product.color}</li>}
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Care Instructions</h3>
              <ul style={{ color: '#666', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Hand wash in cold water</li>
                <li>Lay flat to dry</li>
                <li>Do not bleach or tumble dry</li>
                <li>Iron on low heat if needed</li>
              </ul>
            </div>

            <Button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              style={{ width: '100%', fontSize: '18px' }}
            >
              <ShoppingCart size={20} style={{ marginRight: '10px' }} />
              Add to Cart
            </Button>

            <ProductReviews productId={product.id} user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsModal;
