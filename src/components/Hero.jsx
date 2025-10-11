import React from 'react';

const Hero = () => {
  return (
    <section style={{
      backgroundImage: 'url(/assets/CountrySideBck.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      color: 'white',
      padding: '80px 40px',
      textAlign: 'center'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '48px', margin: '0 0 20px 0' }}>
          Welcome to Southern Design Store
        </h2>
        <p style={{ fontSize: '20px', margin: 0 }}>
          Discover amazing products at great prices
        </p>
      </div>
    </section>
  );
};

export default Hero;
