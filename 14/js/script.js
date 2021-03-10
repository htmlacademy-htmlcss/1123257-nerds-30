// Modal
const link = document.querySelector(".modal-link");
const popup = document.querySelector(".modal");
const close = document.querySelector(".button-close");
const my_name = popup.querySelector(".feedback-name");
const my_email = popup.querySelector(".feedback-email");
const my_message = popup.querySelector(".feedback-message");
const form = popup.querySelector("form");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storageName && storageEmail) {
    my_name.value = storageName;
    my_email.value = storageEmail;
    my_message.focus()
  } else {
    my_name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!my_name.value || !my_email.value || !my_message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", my_name.value);
      localStorage.setItem("email", my_email.value);
    }
    popup.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});

// slider
const promo = document.querySelector(".promo");
const dot_first = document.querySelector(".dot-first");
const dot_second = document.querySelector(".dot-second");
const dot_third = document.querySelector(".dot-third");

const item_first = document.querySelector(".item-first");
const item_second = document.querySelector(".item-second");
const item_third = document.querySelector(".item-third");

dot_first.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (
    item_second.classList.contains("item-show") ||
    item_third.classList.contains("item-show")
  ) {
    item_second.classList.remove("item-show");
    item_third.classList.remove("item-show");
    item_first.classList.add("item-show");

    dot_second.classList.remove("current");
    dot_third.classList.remove("current");
    dot_first.classList.add("current");
  }
})

dot_second.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (
    item_first.classList.contains("item-show") ||
    item_third.classList.contains("item-show")
  ) {
    item_first.classList.remove("item-show");
    item_third.classList.remove("item-show");
    item_second.classList.add("item-show");

    dot_first.classList.remove("current");
    dot_third.classList.remove("current");
    dot_second.classList.add("current");
  }
})

dot_third.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (
    item_first.classList.contains("item-show") ||
    item_second.classList.contains("item-show")
  ) {
    item_second.classList.remove("item-show");
    item_first.classList.remove("item-show");
    item_third.classList.add("item-show");

    dot_second.classList.remove("current");
    dot_first.classList.remove("current");
    dot_third.classList.add("current");
  }
})