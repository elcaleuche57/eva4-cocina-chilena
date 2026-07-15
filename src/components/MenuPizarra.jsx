import React from 'react';
import PlatoCard from './PlatoCard';

function MenuPizarra({ menu, onToggleDisponibilidad, onEliminarPlato }) {
  return (
    <div 
      className="menu-pizarra" 
      style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}
    >
      {menu.length === 0 ? (
        <p>No hay platos en el menú. ¡Agrega uno arriba!</p>
      ) : (
        menu.map((plato) => (
          <PlatoCard 
            key={plato.idMeal} 
            plato={plato} 
            onToggleDisponibilidad={onToggleDisponibilidad} 
            onEliminarPlato={onEliminarPlato} 
          />
        ))
      )}
    </div>
  );
}

export default MenuPizarra;