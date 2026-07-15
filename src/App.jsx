import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [menu, setMenu] = useState(() => {
    try {
      const saved = localStorage.getItem('cocina_chilena_menu');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error cargando persistencia:", error);
      return [];
    }
  });

  return (
    <div className="app-container">
      <header>
        <h1>Cocina Chilena - Administrador de Menú</h1>
      </header>
      <main>
        {/* Aquí renderizaremos la pizarra y los formularios en los siguientes pasos */}
        <p>Cantidad de platos cargados: {menu.length}</p>
      </main>
    </div>
  );
}

export default App;