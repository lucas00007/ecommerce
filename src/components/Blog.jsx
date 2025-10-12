import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

const blogPosts = [
  {
    id: 1,
    title: 'Why Alpaca Wool is Superior to Regular Wool',
    excerpt: 'Discover the amazing properties of alpaca wool - softer, warmer, and hypoallergenic. Learn why alpaca is the premium choice for winter wear.',
    date: 'January 2025',
    image: '/assets/Female-Sweater1.jpg'
  },
  {
    id: 2,
    title: 'How to Care for Your Alpaca Sweater',
    excerpt: 'Keep your alpaca products looking beautiful for years. Simple care tips to maintain the softness and quality of your alpaca garments.',
    date: 'January 2025',
    image: '/assets/Man-Sweater2 .jpg'
  },
  {
    id: 3,
    title: 'Supporting Andean Artisans Through Fair Trade',
    excerpt: 'Every purchase supports traditional Andean craftspeople. Learn about the artisans behind your beautiful alpaca products.',
    date: 'December 2024',
    image: '/assets/Female-Poncho-Red1.jpg'
  }
];

const Blog = () => {
  const { isMobile } = useResponsive();

  return (
    <section id="blog" style={{
      padding: isMobile ? '40px 20px' : '80px 40px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontSize: isMobile ? '32px' : '42px', 
        marginBottom: '20px', 
        color: '#000', 
        fontWeight: '700',
        textAlign: 'center'
      }}>
        Alpaca Care & Stories
      </h2>
      <p style={{ 
        fontSize: '18px', 
        color: '#666', 
        marginBottom: '40px',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto 40px'
      }}>
        Learn about alpaca wool, care tips, and the artisans behind your products
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {blogPosts.map((post) => (
          <article
            key={post.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '20px' }}>
              <div style={{ 
                fontSize: '12px', 
                color: '#51c2bc', 
                fontWeight: '600',
                marginBottom: '10px',
                textTransform: 'uppercase'
              }}>
                {post.date}
              </div>
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '10px',
                color: '#000'
              }}>
                {post.title}
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#666',
                lineHeight: '1.6'
              }}>
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
