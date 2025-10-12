import React from 'react';
import { Search } from 'lucide-react';
import { useResponsive } from '../hooks/useResponsive';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const { isMobile } = useResponsive();
  return (
    <div style={{
      position: 'relative',
      maxWidth: '500px',
      margin: '0 auto',
      padding: isMobile ? '0 15px' : '0'
    }}>
      <Search
        style={{
          position: 'absolute',
          left: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#999'
        }}
        size={20}
      />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: isMobile ? '14px 15px 14px 45px' : '12px 15px 12px 45px',
          border: '2px solid #e0e0e0',
          borderRadius: '25px',
          fontSize: '16px',
          outline: 'none',
          minHeight: '44px',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
};

export default SearchBar;
