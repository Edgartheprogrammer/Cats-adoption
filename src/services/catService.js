// catService.js
const API_KEY = 'live_OUcCtZixRV8lk34E7i1CH0fjiz5jAKM8giwKY9jnvZdgA4klZdba7EX8Re6H9YxH';
const API_URL = 'https://api.thecatapi.com/v1';

export const fetchCats = async (limit) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&has_breeds=1`, {
    headers: { 'x-api-key': API_KEY }
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Server error' }));
    throw new Error(errorData.error || 'Failed to fetch cats');
  }
  return response.json();
};

export const fetchCatById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/images/${id}`, {
      headers: {
        'x-api-key': API_KEY
      }
    });
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching cat ${id}:`, error);
    throw error;
  }
};