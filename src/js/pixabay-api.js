const API_URL = 'https://pixabay.com/api/';
const API_KEY = '45746393-55b87f9c702251a87b9ae7181';

export const fetchPhotos = searchQuery => {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 30,
  });

  return fetch(`${API_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};