import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

const imagesList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.more-btn');

function IMGelement(
  comments,
  likes,
  views,
  downloads,
  largeImageURL,
  webformatURL,
  tags
) {
  return `
        <li class="card">
          <div class="img-container">
            <a href="${largeImageURL}">
              <img class="card-image" src="${webformatURL}" alt="${tags}" />
            </a>
          </div>
          <ul class="card-stats">
            <li><b>Likes</b><span>${likes}</span></li>
            <li><b>Views</b><span>${views}</span></li>
            <li><b>Comments</b><span>${comments}</span></li>
            <li><b>Downloads</b><span>${downloads}</span></li>
          </ul>
        </li> 
    `;
}

function IMGelements(imgs) {
  return imgs
    .map(elem => {
      const {
        comments,
        likes,
        views,
        downloads,
        largeImageURL,
        webformatURL,
        tags,
      } = elem;
      return IMGelement(
        comments,
        likes,
        views,
        downloads,
        largeImageURL,
        webformatURL,
        tags
      );
    })
    .join('');
}

function clearGallery() {
  imagesList.innerHTML = '';
}
//!=============================================================

export function renderInitialGallery(imgArr) {
  clearGallery();
  imagesList.innerHTML = IMGelements(imgArr);
  refreshLightbox();
}
//!=============================================================
export function appendToGallery(imgArr) {
  imagesList.insertAdjacentHTML('beforeend', IMGelements(imgArr));
  refreshLightbox();
}
//!=============================================================

function refreshLightbox() {
  if (!lightbox) {
    lightbox = new SimpleLightbox('.card a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
export function showLoader() {
  loader.classList.add('is-visible');
}
export function hideLoader() {
  loader.classList.remove('is-visible');
}
