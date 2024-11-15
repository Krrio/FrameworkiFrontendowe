import React from 'react';

const RatingBar = ({ rate }) => {
  const rating = Math.max(0, Math.min(rate, 10));

  return (
    <div style={{ display: 'flex', gap: '0.2em', flexWrap: 'wrap', justifyContent: 'center' }}>
      {[...Array(10)].map((_, index) => (
        <span 
          key={index} 
          style={{ fontSize: '1.5em', color: index < rating ? '#000' : '#ccc', lineHeight: 1 }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
