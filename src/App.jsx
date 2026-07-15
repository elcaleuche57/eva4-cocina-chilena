import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MenuPizarra from './components/MenuPizarra';
import './App.css';

function App() {
  // 5.1 Estado Inicial Perezoso con Control de Errores
  const [menu, setMenu] = useState(() => {
    try {
      const saved = localStorage.getItem('cocina_chilena_menu');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error cargando persistencia:", error);
      return [];
    }
  });

  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');
  const [nuevaImagen, setNuevaImagen] = useState('');

  // 5.2 Sincronización con useEffect
  useEffect(() => {
    localStorage.setItem('cocina_chilena_menu', JSON.stringify(menu));
  }, [menu]);

  // 5.3 Operación CREATE
  const handleCrearPlato = (e) => {
    e.preventDefault();
    if (!nuevoNombre.trim()) {
      alert("El nombre del plato es obligatorio.");
      return;
    }
    const precioConvertido = Number(nuevoPrecio);
    if (Number.isNaN(precioConvertido) || precioConvertido < 0 || nuevoPrecio.trim() === '') {
      alert("Error de validación financiera: El precio debe ser un número válido y no puede ser negativo.");
      return;
    }
    const nuevoPlato = {
      idMeal: Date.now().toString(),
      strMeal: nuevoNombre,
      strMealThumb: nuevaImagen.trim() || 'https://via.placeholder.com/150',
      precio: precioConvertido,
      disponible: true
    };
    setMenu((prevMenu) => [...prevMenu, nuevoPlato]);
    setNuevoNombre('');
    setNuevoPrecio('');
    setNuevaImagen('');
  };

  // 5.5 Operación UPDATE Inmutable
  const handleToggleDisponibilidad = (id) => {
    setMenu((prevMenu) =>
      prevMenu.map((plato) =>
        plato.idMeal === id 
          ? { ...plato, disponible: !plato.disponible } 
          : plato
      )
    );
  };

  // 5.6 Operación DELETE Inmutable
  const handleEliminarPlato = (id) => {
    setMenu((prevMenu) => prevMenu.filter((plato) => plato.idMeal !== id));
  };

  // 5.7 Botón de Reset y Limpieza Completa
  const handleResetMenu = () => {
    if (window.confirm("¿Estás seguro de que deseas vaciar todo el menú? Esta acción no se puede deshacer.")) {
      setMenu([]); // Vaciar el estado en React de inmediato
      localStorage.removeItem('cocina_chilena_menu'); // Remover la clave de localStorage permanentemente
    }
  };

  return (
    <div className="app-container">
      <Navbar /> 
      
      <main style={{ padding: '20px' }}>
        <section id="formulario" className="form-seccion">
          <h2>Agregar Nuevo Plato</h2>
          <form onSubmit={handleCrearPlato}>
            <div className="form-group">
              <label>Nombre del Plato:</label>
              <input 
                type="text" 
                value={nuevoNombre} 
                onChange={(e) => setNuevoNombre(e.target.value)} 
                placeholder="Ej. Pastel de Choclo"
              />
            </div>
            <div className="form-group">
              <label>Precio:</label>
              <input 
                type="text" 
                value={nuevoPrecio} 
                onChange={(e) => setNuevoPrecio(e.target.value)} 
                placeholder="Ej. 7500"
              />
            </div>
            <div className="form-group">
              <label>URL de Imagen (Opcional):</label>
              <input 
                type="text" 
                value={nuevaImagen} 
                onChange={(e) => setNuevaImagen(e.target.value)} 
                placeholder="https://..."
              />
            </div>
            <button type="submit">Guardar Plato</button>
          </form>
        </section>

        <section id="pizarra" className="lista-seccion">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '20px' 
          }}>
            <h2>Pizarra del Menú</h2>
            
            {/* Botón de control de reset global (Punto 5.7) */}
            {menu.length > 0 && (
              <button 
                onClick={handleResetMenu}
                style={{
                  backgroundColor: '#343a40',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Limpiar Menú Completo
              </button>
            )}
          </div>
          
          <MenuPizarra 
            menu={menu} 
            onToggleDisponibilidad={handleToggleDisponibilidad} 
            onEliminarPlato={handleEliminarPlato} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;