import { fetchPhotos } from './js/pixabay-api';

const elements = {
  form: document.querySelector('.form'),
};

elements.form.addEventListener('submit', handlerSearch);

function handlerSearch(evt) {
  evt.preventDefault();

  const data = {};
  new FormData(evt.target).forEach((value, key) => {
    return (data[key] = value.trim().toLowerCase());
  });

  if (!data.textValue) {
    alert('it is empty');
    return;
  }

  fetchPhotos(data.textValue);

  evt.currentTarget.reset();
}
