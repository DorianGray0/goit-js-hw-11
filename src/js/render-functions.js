import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderFunctions(photos) {
  const { hits } = photos;
  const list = document.querySelector('.photos-list');

  const photoList = hits
    .map(
      ({ downloads, comments, views, likes, tags, webformatURL }) => `
    <li>
      <img src="${webformatURL}" alt="${tags}" loading="lazy">
      <span>Likes ${likes}</span>
      <span>Views ${views}</span>
      <span>Comments ${comments}</span>
      <span>Downloads ${downloads}</span>
    </li>`
    )
    .join('');

  list.innerHTML = '';

  list.insertAdjacentHTML('beforeend', photoList);

  const gallery = $('.photos-list a').simpleLightbox();
}
