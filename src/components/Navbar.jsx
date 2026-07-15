import React from 'react';

function Navbar() {
  return (
    <nav className="navbar" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 30px', 
      backgroundColor: '#ad2525', // Un rojo bien chileno para el diseño
      color: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.5rem' }}>🇨🇱</span>
        <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 'bold' }}>Cocina Chilena</h2>
      </div>
      <ul className="navbar-links" style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '20px', 
        margin: 0, 
        padding: 0 
      }}>
        <li><a href="#formulario" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Agregar Plato</a></li>
        <li><a href="#pizarra" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Pizarra de Menú</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;