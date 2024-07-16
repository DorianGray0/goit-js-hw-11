import { fetchPhotos } from './js/pixabay-api';
import { clearList, renderFunctions } from './js/render-functions';

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
  clearList();
  spinnerShown();

  fetchPhotos(data.textValue)
    .then(photos => renderFunctions(photos))
    .finally(() => {
      spinnerClose();
    });

  evt.currentTarget.reset();
}

function spinnerShown() {
  return elements.spinner.classList.remove('hidden');
}

function spinnerClose() {
  return elements.spinner.classList.add('hidden');
}
