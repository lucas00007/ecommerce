import React from 'react';
import { categories } from '../data/products';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '16px',
            backgroundColor: selectedCategory === category ? '#007bff' : 'white',
            color: selectedCategory === category ? 'white' : '#333',
            transition: 'all 0.3s',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
