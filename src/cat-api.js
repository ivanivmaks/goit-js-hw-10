const URL = 'https://api.thecatapi.com/v1/';

const options = {
  headers: {
    'x-api-cat':
      'live_EikgQmUlRjX2qHTV0UfhtWRLiZkuGEWc6GL8vOxWoie7xjhArwURiWR3yYVD0oZq',
  },
};

function fetchBreeds() {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
