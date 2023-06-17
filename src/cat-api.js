const URL = 'https://api.thecatapi.com/v1/';

const options = {
  headers: {
    'x-api-key':
      'live_EikgQmUlRjX2qHTV0UfhtWRLiZkuGEWc6GL8vOxWoie7xjhArwURiWR3yYVD0oZq',
  },
};

function fetchBreeds(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(url) {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { URL, fetchBreeds, fetchCatByBreed };
