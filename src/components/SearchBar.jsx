import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div style={{
      position: 'relative',
      maxWidth: '500px',
      margin: '0 auto'
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
          padding: '12px 15px 12px 45px',
          border: '2px solid #e0e0e0',
          borderRadius: '25px',
          fontSize: '16px',
          outline: 'none'
        }}
      />
    </div>
  );
};

export default SearchBar;
