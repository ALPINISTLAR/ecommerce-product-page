const elsShoppingCartRemoveButton = document.querySelectorAll('.item-shopping-cart-products__remove-button');
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
evt.preventDefault();
elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open');
  });
}


// elsShoppingCartRemoveButton.forEach(function (elRemoveButton) {
// elRemoveButton.addEventListener('click', function () {
//   elRemoveButton.closest('.shopping-cart-products__item').classList.add('shopping-cart-products__item--remove');
// })
// });
