import getImagesByQuery from './js/pixabay-api';
import { createGallery, showLoader, hideLoader } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//!=============================================================

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formText = e.target.elements['search-text'].value.trim();

  if (!formText) return;

  showLoader();

  getImagesByQuery(formText)
    .then(hits => {
      if (!hits.length) {
        iziToast.error({
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      }
      createGallery(hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `${error}`,
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});
