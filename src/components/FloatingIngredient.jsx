import React from 'react';

export default function FloatingIngredient({ ing, mousePos }) {
  const isBottom = !!ing.bottom;
  const isTop = !!ing.top;

  return (
    <div 
      className={`ingredient ${isBottom ? 'is-bottom' : ''} ${isTop ? 'is-top' : ''}`}
      style={{ 
        transform: `translate(${mousePos.x * ing.depth}px, ${mousePos.y * ing.depth}px)`,
        '--desktop-top': ing.top,
        '--desktop-bottom': ing.bottom,
        '--desktop-left': ing.left,
        '--desktop-right': ing.right
      }}
    >
      <img src={ing.src} alt={ing.id} className="ingredient-img" style={{ '--desktop-width': ing.size }} />
    </div>
  );
}
