import React from 'react';

function PlatoCard({ plato }) {
  return (
    <div className="plato-card">
      <img 
        src={plato.strMealThumb} 
        alt={plato.strMeal} 
        className="plato-img" 
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <div className="plato-info">
        <h3>{plato.strMeal}</h3>
        <p className="plato-precio">${plato.precio}</p>
        <span className={`estado-tag ${plato.disponible ? 'disponible' : 'agotado'}`}>
          {plato.disponible ? 'Disponible' : 'Agotado'}
        </span>
      </div>
    </div>
  );
}

export default PlatoCard;