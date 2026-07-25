import React from 'react';

export default function FloatingIngredient({ ing, mousePos }) {
  return (
    <div 
      className="ingredient"
      style={{ 
        transform: `translate(${mousePos.x * ing.depth}px, ${mousePos.y * ing.depth}px)`,
        top: ing.top,
        bottom: ing.bottom,
        left: ing.left,
        right: ing.right
      }}
    >
      <img src={ing.src} alt={ing.id} className="ingredient-img" style={{ '--desktop-width': ing.size }} />
    </div>
  );
}
