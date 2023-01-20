import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMakerMarkup = galleryItems
  .map(image => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMakerMarkup);

galleryEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
    onShow: () => document.addEventListener('keydown', onEscExitPress),
    onClose: () => document.removeEventListener('keydown', onEscExitPress),
  });

  instance.show();

  function onEscExitPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
