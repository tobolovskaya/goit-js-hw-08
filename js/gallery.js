const gallery = document.querySelector('.gallery');

const createGalleryMarkup = images => {
  return images
    .map(({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}" onclick="event.preventDefault()">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `)
    .join('');
};

gallery.innerHTML = createGalleryItemsMarkup(images);

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const largeImageURL = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${largeImageURL}" width="800" height="600">`);
  instance.show();
});
