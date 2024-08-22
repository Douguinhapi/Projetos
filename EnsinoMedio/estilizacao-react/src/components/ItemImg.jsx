import React from 'react';

export default function ItemImg({ src}) {
  return (
    <div className="item-img four-column content">
      <img src={src} />
    </div>
    
  );
}
