import React from 'react';

function PlatoCard({ plato, onToggleDisponibilidad, onEliminarPlato }) {
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
        
        {/* Botón para cambiar disponibilidad (Punto 5.5) */}
        <button 
          onClick={() => onToggleDisponibilidad(plato.idMeal)}
          style={{ marginTop: '10px', display: 'block', width: '100%' }}
        >
          Marcar como {plato.disponible ? 'Agotado' : 'Disponible'}
        </button>

        {/* Botón para eliminar plato (Punto 5.6) */}
        <button 
          onClick={() => onEliminarPlato(plato.idMeal)}
          style={{ 
            marginTop: '8px', 
            display: 'block', 
            width: '100%', 
            backgroundColor: '#dc3545', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            padding: '6px 0',
            cursor: 'pointer'
          }}
        >
          Eliminar Plato
        </button>
      </div>
    </div>
  );
}

export default PlatoCard;