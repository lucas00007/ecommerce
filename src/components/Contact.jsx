import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{
      padding: '80px 40px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '42px', marginBottom: '30px', color: '#000', fontWeight: '700' }}>
        Contact Us
      </h2>
      <p style={{ fontSize: '18px', color: '#000', marginBottom: '40px', fontWeight: '500' }}>
        Have questions? We'd love to hear from you!
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Mail size={24} color="#51c2bc" />
          <span style={{ fontSize: '18px', color: '#000', fontWeight: '500' }}>sds.llc0016@gmail.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Phone size={24} color="#51c2bc" />
          <span style={{ fontSize: '18px', color: '#000', fontWeight: '500' }}>+1 (214) 938-0442</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <MapPin size={24} color="#51c2bc" />
          <span style={{ fontSize: '18px', color: '#000', fontWeight: '500' }}>United States</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
