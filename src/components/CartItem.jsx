import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '15px',
      padding: '15px',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
        <p style={{ margin: '0 0 10px 0', color: '#007bff', fontWeight: 'bold' }}>
          ${item.price}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            style={{
              border: '1px solid #ddd',
              background: 'white',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '4px'
            }}
          >
            <Minus size={16} />
          </button>
          <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            style={{
              border: '1px solid #ddd',
              background: 'white',
              cursor: 'pointer',
              padding: '5px',
              borderRadius: '4px'
            }}
          >
            <Plus size={16} />
          </button>
          <button
            onClick={() => onRemove(item.id)}
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: '#dc3545',
              marginLeft: 'auto'
            }}
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
