// 1. Adding item to list

const inputValue = document.querySelector(".input__text");
const inputBtn = document.querySelector(".input__button");
const list = document.querySelector(".list");
const listItem = document.querySelector(".list__item");
const deleteBtn = document.querySelectorAll(".list__item--delete");

const addItem = () => {
  const listHTML = `<li class="list__item">${
    inputValue.value
  }<span class="list__item--delete">X</span></li>`;
  list.insertAdjacentHTML("beforeend", listHTML);
};

const clearInput = () => {
  inputValue.value = "";
};

inputBtn.addEventListener("click", () => {
  event.preventDefault();
  addItem();
  clearInput();
});
