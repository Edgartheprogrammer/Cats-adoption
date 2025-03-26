// src/services/catService.js
const API_KEY = 'live_OUcCtZixRV8lk34E7i1CH0fjiz5jAKM8giwKY9jnvZdgA4klZdba7EX8Re6H9YxH';
const BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchRandomCats = async (limit = 10) => {
  try {
    const response = await fetch(
      `${BASE_URL}/images/search?limit=${limit}&has_breeds=1&api_key=${API_KEY}`
    );
    
    if (!response.ok) throw new Error('Failed to fetch cats');
    return await response.json();
  } catch (error) {
    console.error('Error fetching cats:', error);
    throw error;
  }
};

export const fetchCatDetails = async (catId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/images/${catId}?api_key=${API_KEY}`
    );
    
    if (!response.ok) throw new Error('Failed to fetch cat details');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching cat ${catId}:`, error);
    throw error;
  }
};