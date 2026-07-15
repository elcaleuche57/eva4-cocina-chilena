import React from 'react';
import PlatoCard from './PlatoCard';

function MenuPizarra({ menu }) {
  return (
    // Implementa Flexbox con gap y space-evenly según se exige en el Punto 3.6
    <div 
      className="menu-pizarra" 
      style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}
    >
      {menu.length === 0 ? (
        <p>No hay platos en el menú. ¡Agrega uno arriba!</p>
      ) : (
        menu.map((plato) => (
          // Obligatorio: la key basada en idMeal para reconciliación eficiente
          <PlatoCard key={plato.idMeal} plato={plato} />
        ))
      )}
    </div>
  );
}

export default MenuPizarra;