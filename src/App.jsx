import React, { useState, useEffect } from 'react';
import MenuPizarra from './components/MenuPizarra';
import './App.css';

function App() {
  s
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

  useEffect(() => {
    localStorage.setItem('cocina_chilena_menu', JSON.stringify(menu));
  }, [menu]);

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

  return (
    <div className="app-container">
      <header>
        <h1>Cocina Chilena - Administrador de Menú</h1>
      </header>
      
      <main>
        <section className="form-seccion">
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

        <section className="lista-seccion">
          <h2>Pizarra del Menú</h2>
          <MenuPizarra menu={menu} />
        </section>
      </main>
    </div>
  );
}

export default App;