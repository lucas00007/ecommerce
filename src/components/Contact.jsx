import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnPolicy from './ReturnPolicy';

const Contact = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showReturns, setShowReturns] = useState(false);

  return (
    <>
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
      
      <footer style={{
        background: 'linear-gradient(135deg, #51c2bc 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: '600' }}>Southern Designs Store</h3>
          <p style={{ fontSize: '16px', marginBottom: '20px', opacity: 0.9 }}>Authentic Andean Alpaca Products</p>
          
          <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setShowTerms(true)} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px' }}>Terms of Service</button>
            <button onClick={() => setShowPrivacy(true)} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px' }}>Privacy Policy</button>
            <button onClick={() => setShowReturns(true)} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px' }}>Return Policy</button>
          </div>
          
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.3)', 
            paddingTop: '20px', 
            marginTop: '20px',
            fontSize: '14px',
            opacity: 0.8
          }}>
            <p style={{ margin: '5px 0' }}>Website Owner & Administrator</p>
            <p style={{ margin: '5px 0', fontWeight: '500' }}>Contact: sds.llc.0016@gmail.com</p>
            <p style={{ margin: '15px 0 0 0' }}>© {new Date().getFullYear()} Southern Designs Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <ReturnPolicy isOpen={showReturns} onClose={() => setShowReturns(false)} />
    </>
  );
};

export default Contact;
