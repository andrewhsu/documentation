import React from 'react';

export default function Grid({
  gap = '1rem',
  minWidth = '250px',
  children,
}) {  
  return (
    <div className="grid" style={{
      'width': '100%',
      'display': 'grid',
      'gap': gap,
      'grid-template-columns': `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
    }}>
      {children}
    </div>
  )
}