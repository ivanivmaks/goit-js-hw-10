import { URL, fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'slim-select/dist/slimselect.css';

function getRefs() {
  return {
    select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    info: document.querySelector('.cat-info'),
  };
}

const refs = getRefs();

function isVisually(arr) {
  arr.forEach(element => {
    if (!element.classList.contains('visually-hidden')) {
      element.classList.remove('visually-hidden');
    }
  });
}

function isHidden(arr) {
  arr.forEach(element => {
    if (!element.classList.contains('visually-hidden')) {
      element.classList.add('visually-hidden');
    }
  });
}

let url = URL + 'breeds';
fetchBreeds(url).then(addDataSelectBreeds).catch(isError);

function addDataSelectBreeds(addBreeds) {}

function isError(error) {}

refs.select.addEventListener('change', onSelect);

function onSelect(event) {
  url = URL + 'breeds' + '/images/search';
}
