import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const arrayGalleryItems = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', arrayGalleryItems);

galleryEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();

  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
