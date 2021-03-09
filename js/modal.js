const link = document.querySelector(".modal-link");
const popup = document.querySelector(".modal");
const close = document.querySelector(".button-close");
// const alldoc = document.querySelector(".page-body");
const my_name = popup.querySelector(".feedback-name");
const my_email = popup.querySelector(".feedback-email");
const my_message = popup.querySelector(".feedback-message");
const form = popup.querySelector("form");
// const storage = localStorage.getItem("my_name"); /*!__?????? */

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке Напишите нам");
  // window.alert("Клик по ссылке Напишите нам");
  popup.classList.add("modal-show");
  my_name.focus();

  if (storage) {
      my_name.value = storage;
      my_email.focus();
    } else {
      my_name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

// alldoc.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popup.classList.remove("modal-show");
// });
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("Отправляем форму");
  console.log(my_name.value);
  console.log(my_email.value);
  console.log(my_message.value);

  if (!my_name.value || !my_email.value || !my_message.value) {
    evt.preventDefault();
    popup.classList.add("modal-error")
    // console.log("Нужно ввести логин, пароль и текст сообщения");
    // alert("Нужно ввести логин, пароль и текст сообщения");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", my_name.value);
    }
  }
  console.log(storage);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});


localStorage.clear()

