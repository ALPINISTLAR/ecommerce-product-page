const modifiers = {
  headerCartModalOpen: 'site-header__cart-modal--open',
  imgThumnailActive: 'image-showcase__thumbnail--active',
  lightboxOpen: 'lightbox--open'
};


// Shopping cart
const elsShoppingCartRemoveButton = document.querySelectorAll('.item-shopping-cart-products__remove-button');
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    elSiteHeaderCartModal.classList.toggle(modifiers.headerCartModalOpen);
  });
}

// IMAGE SHOWCASE

const elsImageShowcaseThumbnailButton = document.querySelectorAll('.js-thumbnail-button');
const elsImageShowcaseThumbnail = document.querySelectorAll('.image-showcase__thumbnail');
const elImageShowcaseImg = document.querySelector('.image-showcase__img');

elsImageShowcaseThumbnailButton.forEach(function (elThumbnailButton) {
  elThumbnailButton.addEventListener('click', function () {
    elsImageShowcaseThumbnail.forEach(function (elShowcaseThumbnail) {
      // Remove active state from all buttons
      elShowcaseThumbnail.classList.remove(modifiers.imgThumnailActive)
    });
    // Add active state to clicked button
    elThumbnailButton.parentElement.classList.add(modifiers.imgThumnailActive)

    // Update active image src accordingly
    elImageShowcaseImg.src = elThumbnailButton.dataset.showcaseImgBig;
    elImageShowcaseImg.srcset = `${elThumbnailButton.dataset.showcaseImgBig} 1x, ${elThumbnailButton.dataset.showcaseImgRetina} 2x`;
  })
})


// LIGHTBOX //
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightbox = document.querySelector('.lightbox');
const elLightboxClose = document.querySelector('.js-lightbox-close');

// Open Lightbox
if (elLightboxToggler) {
  elLightboxToggler.addEventListener('click', function () {
    elLightbox.classList.add(modifiers.lightboxOpen)
  });
}
// Close Lightbox
if (elLightboxClose) {
  elLightboxClose.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.lightboxOpen)
  })
}

// elsShoppingCartRemoveButton.forEach(function (elRemoveButton) {
// elRemoveButton.addEventListener('click', function () {
//   elRemoveButton.closest('.shopping-cart-products__item').classList.add('shopping-cart-products__item--remove');
// })
// });
