import React from 'react';

const About = () => {
  return (
    <section id="about" style={{
      padding: '80px 40px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <h2 style={{ fontSize: '42px', marginBottom: '40px', color: '#000', textAlign: 'center', fontWeight: '700' }}>
        About Us
      </h2>
      
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#000', marginBottom: '30px', textAlign: 'justify', fontWeight: '500' }}>
        At Southern Designs Store, tradition and modern design meet in the highlands of southern Ecuador. Our alpaca sweaters, ponchos, and accessories are hand-loomed by Andean artisans whose techniques have been passed down for generations.
      </p>
      
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#000', marginBottom: '30px', textAlign: 'justify', fontWeight: '500' }}>
        We work exclusively with premium alpaca fiber—naturally soft, lightweight, and temperature-regulating, yet remarkably durable and hypoallergenic. From fiber selection and natural dyeing to hand-finishing, every step honors the land and the people who shape each piece.
      </p>
      
      <h3 style={{ fontSize: '28px', marginTop: '40px', marginBottom: '20px', color: '#000', textAlign: 'center', fontWeight: '700' }}>
        Our Mission
      </h3>
      
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#000', marginBottom: '30px', textAlign: 'justify', fontWeight: '500' }}>
        Our mission goes beyond beautiful textiles. We partner directly with artisan cooperatives, pay fair wages, and reinvest in training, safe workshops, and community projects. By choosing Southern Designs Store, you're supporting sustainable grazing practices, small-batch production, and low-impact dyes that help protect Ecuador's fragile mountain ecosystems.
      </p>
      
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#000', marginBottom: '40px', textAlign: 'justify', fontWeight: '500' }}>
        Every garment tells a story—of skilled hands, quiet mountains, and the warmth of a living tradition. Wear something made with purpose, and help preserve the craft for the next generation.
      </p>
      
      <h3 style={{ fontSize: '28px', marginBottom: '25px', color: '#000', textAlign: 'center', fontWeight: '700' }}>
        What Sets Us Apart
      </h3>
      
      <ul style={{ 
        fontSize: '18px', 
        lineHeight: '2', 
        color: '#000', 
        textAlign: 'left',
        maxWidth: '700px',
        margin: '0 auto',
        listStyleType: 'none',
        padding: 0,
        fontWeight: '500'
      }}>
        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 0, color: '#51c2bc', fontWeight: 'bold' }}>✓</span>
          Handcrafted in southern Ecuador by master weavers
        </li>
        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 0, color: '#51c2bc', fontWeight: 'bold' }}>✓</span>
          Premium, ethically sourced alpaca fiber (soft, warm, hypoallergenic)
        </li>
        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 0, color: '#51c2bc', fontWeight: 'bold' }}>✓</span>
          Fair pay, community reinvestment, and sustainable production
        </li>
        <li style={{ marginBottom: '15px', paddingLeft: '30px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 0, color: '#51c2bc', fontWeight: 'bold' }}>✓</span>
          Small-batch quality with timeless Andean design
        </li>
      </ul>
    </section>
  );
};

export default About;
