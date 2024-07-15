import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderFunctions } from './render-functions';

export function fetchPhotos(textValue) {
  const KEY_URL = '44930216-c8fe7065044399c3ab26c911d';
  const URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    q: textValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${URL}?key=${KEY_URL}&${searchParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(photos => {
      if (photos.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      console.log(photos);
      console.log(renderFunctions(photos));
    })
    .catch(error => console.error(error));
}
