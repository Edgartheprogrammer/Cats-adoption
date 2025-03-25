// services/catService.js
const API_KEY = 'live_OUcCtZixRV8lk34E7i1CH0fjiz5jAKM8giwKY9jnvZdgA4klZdba7EX8Re6H9YxH';
const API_URL = 'https://api.thecatapi.com/v1';

// Предпочтительно использовать внешний API, но с фолбэком на локальный
export const fetchCats = async () => {
  try {
    // Сначала пробуем получить данные из внешнего API
    return await fetchRemoteCats();
  } catch (error) {
    console.warn('Не удалось получить данные из внешнего API, использую локальный:', error);
    // Если не получилось, используем локальный JSON-сервер
    return await fetchLocalCats();
  }
};

// Функция для получения данных из локального JSON-сервера
const fetchLocalCats = async () => {
  try {
    const response = await fetch('http://localhost:3001/cats');
    
    if (!response.ok) {
      throw new Error('Ошибка при получении данных с сервера');
    }
    
    const data = await response.json();
    
    // Преобразуем данные в формат, совместимый с компонентом CatCard
    return data.map(cat => ({
      id: cat.id,
      url: cat.image,
      breeds: [
        {
          name: cat.breed,
          description: cat.description
        }
      ]
    }));
  } catch (error) {
    console.error('Ошибка при запросе к локальному API:', error);
    throw error;
  }
};

// Функция для получения данных из The Cat API
const fetchRemoteCats = async () => {
  try {
    const response = await fetch(`${API_URL}/images/search?limit=10&has_breeds=1`, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error('Ошибка при получении данных от API');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при запросе к внешнему API:', error);
    throw error;
  }
};