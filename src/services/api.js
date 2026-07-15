// URL base para obtener platos de la categoría/área de Chile
const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Chile';

/**
 * Obtiene los platos de la API y los transforma (hidrata) con las propiedades locales necesarias.
 * @returns {Promise<Array>} 
 */
export const fetchMenuChileno = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`Error en la red: ${response.status}`);
    }

    const data = await response.json();

   
    const meals = data.meals || [];

   
    const platosHidratados = meals.map((meal) => ({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      precio: 0,           
      disponible: true,     
    }));

    return platosHidratados;
  } catch (error) {
    console.error("Error al obtener o transformar el menú:", error);
    throw error; 
  }
};