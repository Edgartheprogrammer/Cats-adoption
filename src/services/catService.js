// services/catService.js
const API_KEY = 'live_OUcCtZixRV8lk34E7i1CH0fjiz5jAKM8giwKY9jnvZdgA4klZdba7EX8Re6H9YxH';
const API_URL = 'https://api.thecatapi.com/v1';
const LOCAL_API_URL = 'http://localhost:3001';

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
    const response = await fetch(`${LOCAL_API_URL}/cats`);
    
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

// Функция для получения одного кота по ID
export const fetchCatById = async (id) => {
  try {
    const cats = await fetchCats();
    return cats.find(cat => cat.id.toString() === id.toString());
  } catch (error) {
    console.error('Ошибка при получении кота по ID:', error);
    throw error;
  }
};

// Функцию fetchFavorites оставляем без изменений
export const fetchFavorites = async () => {
    try {
      const response = await fetch(`${LOCAL_API_URL}/favorites`);
      if (!response.ok) throw new Error('Ошибка при получении избранного');
      return await response.json();
    } catch (error) {
      console.error('Ошибка при получении избранного:', error);
      throw error;
    }
  };
  
  // Функцию addToFavorites оставляем без изменений
  export const addToFavorites = async (cat) => {
    try {
      // Проверяем, не добавлен ли уже этот кот в избранное
      const favorites = await fetchFavorites();
      const isAlreadyFavorite = favorites.some(favCat => favCat.id === cat.id);
      
      if (isAlreadyFavorite) {
        // Кот уже в избранном
        return { message: 'Кот уже добавлен в избранное' };
      }
      
      const response = await fetch(`${LOCAL_API_URL}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cat),
      });
      
      if (!response.ok) throw new Error('Ошибка при добавлении в избранное');
      return await response.json();
    } catch (error) {
      console.error('Ошибка при добавлении в избранное:', error);
      throw error;
    }
  };
  
  // Функцию removeFromFavorites оставляем без изменений
  export const removeFromFavorites = async (id) => {
    try {
      // Находим запись в избранном по ID кота
      const favorites = await fetchFavorites();
      const favorite = favorites.find(fav => fav.id === id);
      
      if (!favorite) {
        throw new Error('Кот не найден в избранном');
      }
      
      const response = await fetch(`${LOCAL_API_URL}/favorites/${favorite.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Ошибка при удалении из избранного');
      return true;
    } catch (error) {
      console.error('Ошибка при удалении из избранного:', error);
      throw error;
    }
  };

// CRUD операции для заявок на адоптацию
export const submitAdoption = async (adoptionData) => {
  try {
    const response = await fetch(`${LOCAL_API_URL}/adoptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adoptionData),
    });
    
    if (!response.ok) throw new Error('Ошибка при отправке заявки');
    return await response.json();
  } catch (error) {
    console.error('Ошибка при отправке заявки:', error);
    throw error;
  }
};

export const fetchAdoptions = async () => {
  try {
    const response = await fetch(`${LOCAL_API_URL}/adoptions`);
    if (!response.ok) throw new Error('Ошибка при получении заявок');
    return await response.json();
  } catch (error) {
    console.error('Ошибка при получении заявок:', error);
    throw error;
  }
};