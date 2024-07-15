import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function renderFunctions(photos) {
  const { hits } = photos;
  const list = document.querySelector('.photos-list');

  const photoList = hits
    .map(
      ({
        downloads,
        comments,
        views,
        likes,
        tags,
        webformatURL,
        largeImageURL,
      }) => `
    <li class="gallery">
      <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy"></a>
      <span>Likes ${likes}</span>
      <span>Views ${views}</span>
      <span>Comments ${comments}</span>
      <span>Downloads ${downloads}</span>
    </li>`
    )
    .join('');

  clearList();

  list.insertAdjacentHTML('beforeend', photoList);

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

function clearList() {
  const list = document.querySelector('.photos-list');
  return (list.innerHTML = '');
}

export { clearList, renderFunctions };
