import React from 'react';

export default function Grid({
  gap = '1rem',
  minWidth = '250px',
  title = "",
  children,
}) {
  return (
    <div className='container' style={{
      'margin-top': '2.5rem',
    }}>
      <h2>{title}</h2>
      <div className="grid" style={{
        'width': '100%',
        'display': 'grid',
        'gap': gap,
        'grid-template-columns': `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
      }}>
        {children}
      </div>
    </div>
  )
}