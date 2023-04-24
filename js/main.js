// Shopping cart
const elsShoppingCartRemoveButton = document.querySelectorAll('.item-shopping-cart-products__remove-button');
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open');
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
      elShowcaseThumbnail.classList.remove('image-showcase__thumbnail--active')
    });
    // Add active state to clicked button
    elThumbnailButton.parentElement.classList.add('image-showcase__thumbnail--active')

    // Update active image src accordingly
elImageShowcaseImg.src = elThumbnailButton.dataset.showcaseImgBig;
elImageShowcaseImg.srcset = `${elThumbnailButton.dataset.showcaseImgBig} 1x, ${elThumbnailButton.dataset.showcaseImgRetina} 2x`;
  })
})





// elsShoppingCartRemoveButton.forEach(function (elRemoveButton) {
// elRemoveButton.addEventListener('click', function () {
//   elRemoveButton.closest('.shopping-cart-products__item').classList.add('shopping-cart-products__item--remove');
// })
// });
