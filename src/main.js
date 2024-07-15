import { fetchPhotos } from './js/pixabay-api';
import { renderFunctions } from './js/render-functions';

const elements = {
  form: document.querySelector('.js-form'),
  spinner: document.querySelector('.js-loader'),
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

  elements.spinner.hidden = false;

  fetchPhotos(data.textValue)
    .then(photos => renderFunctions(photos))
    .finally(() => {
      elements.spinner.hidden = true;
    });

  evt.currentTarget.reset();
}
