import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
console.log(SimpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';


function createGalleryMarkup() {
    const galleryList = document.querySelector('.gallery');

    const galleryMarkup = galleryItems
        .map(
            ({ preview, original, description }) =>
                `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
           </a>
         </li>`
        )
        .join('');

    galleryList.innerHTML = galleryMarkup;
}

createGalleryMarkup();

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData: 'alt',
});


