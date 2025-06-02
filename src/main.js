import getImagesByQuery from './js/pixabay-api';
import {
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  renderInitialGallery,
  appendToGallery,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const per_page = 15;

let page = 1;
let currentQuery = '';
let totalHits = 0;
//!=============================================================

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.more-btn');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const formText = e.target.elements['search-text'].value.trim();

  currentQuery = formText;
  page = 1;

  if (!formText) return;

  showLoader();

  try {
    const { hits, total } = await getImagesByQuery(formText, page);

    totalHits = total;

    showLoadMoreButton();

    renderInitialGallery(hits);
    console.log(totalHits);
    if (!hits.length) {
      iziToast.error({
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please try again!`,
      });
      hideLoadMoreButton();
      return;
    }
    updateBtnStatus();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `${error}`,
    });
  } finally {
    hideLoader();
  }

  form.reset();
});

//!=============================================================
function updateBtnStatus() {
  if (page * per_page < totalHits) {
    showLoadMoreButton();
  } else {
    iziToast.error({
      title: 'Error',
      message: `We're sorry, but you've reached the end of search results.`,
    });
    hideLoadMoreButton();
  }
}
//!=============================================================

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  const { hits, total } = await getImagesByQuery(currentQuery, page);
  totalHits = total;
  console.log(hits);

  console.log(totalHits);
  appendToGallery(hits);
  scrollPage();
  hideLoader();
  hideLoadMoreButton();
  updateBtnStatus();
});

//!=============================================================

function scrollPage() {
  const firstCard = document.querySelector('.gallery .card');

  if (!firstCard) return;

  const cardHeight = firstCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
