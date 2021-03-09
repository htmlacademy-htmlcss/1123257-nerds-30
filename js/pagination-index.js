let link = document.querySelector(".promo-pagination-item-link-second");
const promo = document.querySelector(".promo");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по 2 ссылке карусели");

  promo.classList.add("item-second-show");
  promo.classList.add("item-first-show");



});