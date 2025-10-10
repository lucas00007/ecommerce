import React from 'react';

const Hero = () => {
  return (
    <section style={{
      backgroundImage: 'url(/assets/CountrySideBck.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '80px 40px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '48px', margin: '0 0 20px 0' }}>
        Welcome to Southern Design Store
      </h2>
      <p style={{ fontSize: '20px', margin: 0 }}>
        Discover amazing products at great prices
      </p>
    </section>
  );
};

export default Hero;
